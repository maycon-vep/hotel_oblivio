"use strict";

class Hospede {
  constructor(nome, documento) {
    if (!nome?.trim() || !documento?.trim()) {
      throw new TypeError("Nome e documento sao obrigatorios.");
    }

    this.nome = nome.trim();
    this.documento = documento.trim();
  }

  descrever() {
    return `${this.nome} — documento ${this.documento}`;
  }
}

// Classe base abstrata: concentra dados e regras comuns da reserva.
class ReservaBase {
  constructor(codigo, hospede, entrada, saida) {
    if (new.target === ReservaBase) {
      throw new TypeError("ReservaBase nao pode ser instanciada diretamente.");
    }

    if (!(hospede instanceof Hospede)) {
      throw new TypeError("Informe um hospede valido.");
    }

    if (!(entrada instanceof Date) || !(saida instanceof Date)) {
      throw new TypeError("Datas invalidas.");
    }

    if (saida <= entrada) {
      throw new RangeError("A saida deve ser posterior a entrada.");
    }

    this.codigo = codigo;
    this.hospede = hospede;
    this.entrada = entrada;
    this.saida = saida;
    this.status = "PENDENTE";
  }

  calcularNoites() {
    const umDia = 86_400_000;
    return Math.round((this.saida - this.entrada) / umDia);
  }

  calcularValor() {
    throw new Error("calcularValor() deve ser implementado pela subclass.");
  }

  confirmar() {
    this.status = "CONFIRMADA";
  }

  cancelar() {
    this.status = "CANCELADA";
  }

  descrever() {
    return [
      this.codigo,
      this.hospede.descrever(),
      `${this.calcularNoites()} noite(s)`,
      `Status: ${this.status}`
    ].join(" | ");
  }
}

// Encapsulamento: o estado interno do gerenciador e privado.
class GerenciadorReservas {
  #reservas = new Map();

  adicionar(reserva) {
    if (!(reserva instanceof ReservaBase)) {
      throw new TypeError("Somente reservas validas podem ser adicionadas.");
    }

    if (this.#reservas.has(reserva.codigo)) {
      throw new Error("Ja existe uma reserva com este codigo.");
    }

    reserva.confirmar();
    this.#reservas.set(reserva.codigo, reserva);
  }

  cancelar(codigo) {
    const reserva = this.#reservas.get(codigo);

    if (!reserva) {
      throw new Error("Reserva nao encontrada.");
    }

    reserva.cancelar();
  }

  consultar(codigo) {
    return this.#reservas.get(codigo) ?? null;
  }

  listar() {
    return [...this.#reservas.values()];
  }

  quantidade() {
    return this.#reservas.size;
  }
}

// Heranca: ReservaPadrao especializa o modelo comum.
class ReservaPadrao extends ReservaBase {
  constructor(codigo, hospede, entrada, saida, diaria) {
    super(codigo, hospede, entrada, saida);
    this.diaria = diaria;
  }

  calcularValor() {
    return {
      tipo: "Reserva padrao",
      valor: this.calcularNoites() * this.diaria
    };
  }
}

// Polimorfismo: o mesmo metodo calcularValor() possui outra formula.
class ReservaPremium extends ReservaBase {
  constructor(codigo, hospede, entrada, saida, diaria, beneficios) {
    super(codigo, hospede, entrada, saida);
    this.diaria = diaria;
    this.beneficios = beneficios;
  }

  calcularValor() {
    const valorAcomodacao = this.calcularNoites() * this.diaria;
    const valorBeneficios = this.beneficios.reduce(
      (total, beneficio) => total + beneficio.preco,
      0
    );

    return {
      tipo: "Reserva premium",
      valor: valorAcomodacao + valorBeneficios
    };
  }
}

class FabricaReserva {
  static criar(tipo, codigo, hospede, entrada, saida, diaria, beneficios = []) {
    if (tipo === "padrao") {
      return new ReservaPadrao(codigo, hospede, entrada, saida, diaria);
    }

    if (tipo === "premium") {
      return new ReservaPremium(
        codigo,
        hospede,
        entrada,
        saida,
        diaria,
        beneficios
      );
    }

    throw new Error(`Tipo de reserva invalido: ${tipo}`);
  }
}

const gerenciador = new GerenciadorReservas();

const reservaPadrao = FabricaReserva.criar(
  "padrao",
  "HOB-001",
  new Hospede("Ana Souza", "123.456.789-00"),
  new Date("2026-12-10T15:00:00"),
  new Date("2026-12-13T12:00:00"),
  500
);

const reservaPremium = FabricaReserva.criar(
  "premium",
  "HOB-002",
  new Hospede("Carlos Lima", "987.654.321-00"),
  new Date("2026-12-20T15:00:00"),
  new Date("2026-12-23T12:00:00"),
  850,
  [
    { nome: "Spa", preco: 180 },
    { nome: "Transfer", preco: 120 }
  ]
);

gerenciador.adicionar(reservaPadrao);
gerenciador.adicionar(reservaPremium);

for (const reserva of gerenciador.listar()) {
  console.log(reserva.descrever());
  console.log(reserva.calcularValor());
}

gerenciador.cancelar("HOB-002");
console.log(gerenciador.consultar("HOB-002").descrever());
console.log(`Reservas cadastradas: ${gerenciador.quantidade()}`);
