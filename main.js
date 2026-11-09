const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const cookieBanner = document.querySelector("#cookie-banner");
const availabilityForm = document.querySelector("#availability-form");
const contactForm = document.querySelector("#contact-form");
const policyDialog = document.querySelector("#policy-dialog");
const policyModal = policyDialog.querySelector(".policy-modal");

const translations = {
  es: {
    "Acomodações":"Alojamientos","Experiências":"Experiencias","Localização":"Ubicación","Contato":"Contacto","Reservar Agora":"Reservar ahora",
    "Bem-vindo ao Oblívio":"Bienvenido a Oblívio","O luxo de viver":"El lujo de vivir","sem pressa.":"sin prisa.",
    "Um refúgio contemporâneo entre natureza, conforto e hospitalidade genuína.":"Un refugio contemporáneo entre naturaleza, confort y hospitalidad genuina.",
    "Entrada":"Entrada","Saída":"Salida","Hóspedes":"Huéspedes","Ver disponibilidade":"Ver disponibilidad","Consulta sujeita à confirmação. Seus dados são usados para atendimento hoteleiro.":"Consulta sujeta a confirmación. Tus datos se utilizan para la atención hotelera.",
    "1 hóspede":"1 huésped","2 hóspedes":"2 huéspedes","3 hóspedes":"3 huéspedes","4 hóspedes":"4 huéspedes",
    "Atendimento multilíngue":"Atención multilingüe","Recepção acolhedora em português, inglês e espanhol.":"Recepción acogedora en portugués, inglés y español.",
    "Localização privilegiada":"Ubicación privilegiada","Próximo aos principais atrativos de Brasília.":"Cerca de las principales atracciones de Brasilia.",
    "Wi-Fi de alta velocidade":"Wi-Fi de alta velocidad","Conectividade confiável em todos os espaços.":"Conectividad fiable en todos los espacios.",
    "Café da manhã artesanal":"Desayuno artesanal","Sabores frescos preparados diariamente.":"Sabores frescos preparados diariamente.",
    "Hospede-se":"Hospédate","Ambientes serenos, materiais naturais e cada detalhe pensado para o seu descanso.":"Ambientes serenos, materiales naturales y cada detalle pensado para tu descanso.",
    "Suíte":"Suite","Quarto":"Habitación","Suíte premium":"Suite premium","Reservar este quarto":"Reservar esta habitación","por noite":"por noche",
    "Suíte Horizonte":"Suite Horizonte","Quarto Pátio":"Habitación Patio","Suíte Neblina":"Suite Neblina",
    "2 hóspedes · Cama queen · Vista serena":"2 huéspedes · Cama queen · Vista serena","2 hóspedes · Cama queen · Banheira":"2 huéspedes · Cama queen · Bañera","3 hóspedes · Cama king · Terraço privativo":"3 huéspedes · Cama king · Terraza privada",
    "Mais que hospedagem":"Más que hospedaje","Calma, segurança e atenção aos detalhes.":"Calma, seguridad y atención al detalle.",
    "Do café da manhã até o descanso da noite, cada momento é conduzido com discrição, cuidado e hospitalidade humana.":"Desde el desayuno hasta el descanso nocturno, cada momento se vive con discreción, cuidado y hospitalidad humana.",
    "Conforto pensado para desacelerar":"Conforto pensado para desacelerar","Privacidade e segurança da informação":"Privacidad y seguridad de la información","Experiências locais autênticas":"Experiencias locales auténticas",
    "Proteção de dados:":"Protección de datos:","informações como nome, e-mail, telefone e dados de pagamento são utilizadas estritamente para processar reservas e prestação de atendimento hoteleiro.":"La información como nombre, correo, teléfono y datos de pago se utiliza exclusivamente para procesar reservas y prestar atención hotelera.",
    "Onde estamos":"Dónde estamos","No coração de Brasília":"En el corazón de Brasilia","Ver rota no Google Maps":"Ver ruta en Google Maps",
    "Informações úteis":"Información útil","Perguntas frequentes":"Preguntas frecuentes",
    "Qual é o horário de check-in e check-out?":"¿Cuál es el horario de entrada y salida?","Como funciona o cancelamento?":"¿Cómo funciona la cancelación?","Animais de estimação são permitidos?":"¿Se permiten mascotas?","Como meus dados pessoais são protegidos?":"¿Cómo se protegen mis datos personales?",
    "Check-in a partir das 15h e check-out até as 12h. Solicitações antecipadas podem ser confirmadas conforme disponibilidade.":"Entrada a partir de las 15:00 y salida hasta las 12:00. Las solicitudes anticipadas pueden confirmarse según disponibilidad.",
    "Cancelamentos gratuitos podem ser realizados até 48 horas antes da entrada. Consulte as condições da tarifa escolhida no momento da reserva.":"Las cancelaciones gratuitas pueden realizarse hasta 48 horas antes de la entrada. Consulta las condiciones de la tarifa elegida al reservar.",
    "Quartos selecionados recebem pets mediante consulta prévia, taxa adicional e apresentação das regras de convivência.":"Las habitaciones seleccionadas admiten mascotas previa consulta, tarifa adicional y aceptación de las normas de convivencia.",
    "Adotamos medidas administrativas e técnicas para proteger os dados coletados. O tratamento ocorre conforme os princípios da LGPD e apenas para a finalidade informada.":"Adoptamos medidas administrativas y técnicas para proteger los datos recopilados. El tratamiento cumple los principios de la LGPD y se realiza únicamente para la finalidad informada.",
    "Fale conosco":"Contáctanos","Planeje sua estadia":"Planifica tu estancia","Nossa equipe terá prazer em ajudar você a escolher a melhor experiência.":"Nuestro equipo tendrá gusto en ayudarte a elegir la mejor experiencia.",
    "Nome completo":"Nombre completo","E-mail":"Correo electrónico","Telefone":"Teléfono","Mensagem":"Mensaje","Li e aceito os":"He leído y acepto los","Termos de Uso":"Términos de uso","Política de Privacidade":"Política de privacidad",
    "Os dados coletados serão utilizados exclusivamente para a finalidade de contato e atendimento hoteleiro, em conformidade com a LGPD.":"Los datos recopilados se utilizarán exclusivamente para contacto y atención hotelera, conforme a la LGPD.","Enviar mensagem":"Enviar mensaje",
    "Reserva direta":"Reserva directa","Sua próxima estadia começa aqui.":"Tu próxima estancia comienza aquí.","Consultar disponibilidade":"Consultar disponibilidad",
    "Hospitalidade com propósito e conforto com elegância.":"Hospitalidad con propósito y confort con elegancia.","Links":"Enlaces","Privacidade":"Privacidad","Dados coletados exclusivamente para reservas, atendimento e suporte.":"Datos recopilados exclusivamente para reservas, atención y soporte.",
    "© 2026 Hotel Oblívio. Todos os direitos reservados.":"© 2026 Hotel Oblívio. Todos los derechos reservados.","Seus dados estão seguros conosco em conformidade com a LGPD.":"Tus datos están seguros con nosotros conforme a la LGPD.",
    "Privacidade e cookies":"Privacidad y cookies","Usamos cookies para melhorar sua experiência. Consulte os":"Usamos cookies para mejorar tu experiencia. Consulta los","Termos de Uso e a Política de Privacidade":"Términos de uso y Política de privacidad","Recusar":"Rechazar","Aceitar":"Aceptar",
    "Informação legal":"Información legal","Termos de Uso e Política de Privacidade":"Términos de uso y Política de privacidad","Entendido":"Entendido",
    "Uso do site":"Uso del sitio","Este website oferece informações sobre o Hotel Oblívio e permite solicitar reservas ou contato. Ao utilizá-lo, o usuário declara fornecer informações verdadeiras e utilizar os serviços de forma lícita.":"Este sitio ofrece información sobre el Hotel Oblívio y permite solicitar reservas o contacto. Al utilizarlo, el usuario declara proporcionar información veraz y utilizar los servicios de forma lícita.",
    "Dados pessoais e LGPD":"Datos personales y LGPD","Nome, e-mail, telefone, datas da estadia e dados de pagamento são coletados exclusivamente para processamento da reserva, contato hoteleiro, atendimento e prestação dos serviços solicitados.":"Nombre, correo, teléfono, fechas de estancia y datos de pago se recopilan exclusivamente para procesar reservas, atención hotelera y prestación de los servicios solicitados.",
    "Cookies":"Cookies","Cookies essenciais podem ser utilizados para lembrar preferências e registrar o consentimento deste aviso. O usuário pode aceitar ou recusar o uso de cookies por meio do banner.":"Las cookies esenciales pueden utilizarse para recordar preferencias y registrar el consentimiento de este aviso. El usuario puede aceptar o rechazar las cookies mediante el banner.",
    "Direitos do titular":"Derechos del titular","Nos termos da LGPD, o titular pode solicitar acesso, correção, atualização, anonimização ou exclusão dos dados pessoais, conforme a natureza de cada informação, pelos canais de contato disponíveis neste site.":"Conforme a la LGPD, el titular puede solicitar acceso, corrección, actualización, anonimización o eliminación de datos personales, según su naturaleza, mediante los canales disponibles en este sitio.",
    "Nome, e-mail, telefone e dados de pagamento serão usados estritamente para processamento da reserva, contato hoteleiro e atendimento seguro.":"Nombre, correo, teléfono y datos de pago se utilizarán estrictamente para procesar la reserva, atención hotelera y atención segura.",
    "Selecionar idioma":"Seleccionar idioma","Abrir menu":"Abrir menú","Fechar":"Cerrar","Fechar termos":"Cerrar términos",
    "Selecione datas válidas: a saída deve ser posterior à entrada.":"Selecciona fechas válidas: la salida debe ser posterior a la entrada.",
    "Disponibilidade consultada. Continue para solicitar sua reserva.":"Disponibilidad consultada. Continúa para solicitar tu reserva.",
    "Mensagem enviada com sucesso. Obrigado pelo contato.":"Mensaje enviado correctamente. Gracias por contactarnos.",
    "Reservar":"Reservar","Na reserva":"En la reserva","Excluir":"Eliminar","reservas pendentes":"reservas pendientes",
    "Reserva aguardando":"Reserva en espera","Nenhuma reserva selecionada.":"No hay ninguna reserva seleccionada.",
    "Ir ao pagamento":"Ir al pago","Pagamento da reserva":"Pago de la reserva","Voltar às reservas":"Volver a las reservas",
    "Pagamento concluído":"Pago completado","Pagamento realizado com sucesso":"Pago realizado correctamente",
    "Reserva confirmada":"Reserva confirmada","Código":"Código",
    "Disponibilidade definida. Agora escolha uma acomodação.":"Disponibilidad definida. Ahora elige una habitación.",
    "Defina as datas de entrada e saída antes de reservar.":"Define las fechas de entrada y salida antes de reservar.",
    "Escolha sua estadia":"Elige tu estancia","Acomodação selecionada":"Alojamiento seleccionado",
    "Você escolheu o quarto:":"Has elegido la habitación:",
    "Adicionar à reserva":"Añadir a la reserva","Selecione uma entrada e uma saída válidas.":"Selecciona una entrada y una salida válidas.",
    "hóspede":"huésped","hóspedes":"huéspedes","Quantidade de hóspedes":"Cantidad de huéspedes",
    "Finalizar reserva":"Finalizar reserva","Fechar reserva":"Cerrar reserva","Acomodação":"Alojamiento",
    "Reservar agora":"Reservar ahora","Mapa do CCI Sênior em Samambaia":"Mapa del CCI Sénior en Samambaia",
    "Forma de pagamento":"Forma de pago","Cartão":"Tarjeta","Boleto":"Boleto",
    "Nome impresso no cartão":"Nombre impreso en la tarjeta","Número do cartão":"Número de tarjeta",
    "Validade":"Vencimiento","CVV":"CVV","3 ou 4 dígitos":"3 o 4 dígitos",
    "NOME COMO NO CARTÃO":"NOMBRE COMO EN LA TARJETA","Total da reserva":"Total de la reserva",
    "Pagar e confirmar reserva":"Pagar y confirmar reserva","Concluir":"Finalizar",
    "A saída deve ser posterior à entrada.":"La salida debe ser posterior a la entrada.",
    "Informe um cartão válido e uma validade futura.":"Introduce una tarjeta válida y una fecha de vencimiento futura."
  },
  en: {
    "Acomodações":"Rooms","Experiências":"Experiences","Localização":"Location","Contato":"Contact","Reservar Agora":"Book Now",
    "Bem-vindo ao Oblívio":"Welcome to Oblívio","O luxo de viver":"The luxury of living","sem pressa.":"unhurried.",
    "Um refúgio contemporâneo entre natureza, conforto e hospitalidade genuína.":"A contemporary retreat between nature, comfort, and genuine hospitality.",
    "Entrada":"Check-in","Saída":"Check-out","Hóspedes":"Guests","Ver disponibilidade":"Check availability","Consulta sujeita à confirmação. Seus dados são usados para atendimento hoteleiro.":"Availability is subject to confirmation. Your data is used for hotel service.",
    "1 hóspede":"1 guest","2 hóspedes":"2 guests","3 hóspedes":"3 guests","4 hóspedes":"4 guests",
    "Atendimento multilíngue":"Multilingual service","Recepção acolhedora em português, inglês e espanhol.":"Warm reception in Portuguese, English, and Spanish.",
    "Localização privilegiada":"Prime location","Próximo aos principais atrativos de Brasília.":"Close to Brasília's main attractions.",
    "Wi-Fi de alta velocidade":"High-speed Wi-Fi","Conectividade confiável em todos os espaços.":"Reliable connectivity throughout the property.","Café da manhã artesanal":"Artisan breakfast","Sabores frescos preparados diariamente.":"Fresh flavors prepared daily.",
    "Hospede-se":"Stay with us","Ambientes serenos, materiais naturais e cada detalhe pensado para o seu descanso.":"Serene spaces, natural materials, and every detail designed for your rest.",
    "Suíte":"Suite","Quarto":"Room","Suíte premium":"Premium suite","Reservar este quarto":"Reserve this room","por noite":"per night",
    "Suíte Horizonte":"Horizon Suite","Quarto Pátio":"Patio Room","Suíte Neblina":"Mist Suite",
    "2 hóspedes · Cama queen · Vista serena":"2 guests · Queen bed · Serene view","2 hóspedes · Cama queen · Banheira":"2 guests · Queen bed · Bathtub","3 hóspedes · Cama king · Terraço privativo":"3 guests · King bed · Private terrace",
    "Mais que hospedagem":"More than accommodation","Calma, segurança e atenção aos detalhes.":"Calm, safety, and attention to detail.","Do café da manhã até o descanso da noite, cada momento é conduzido com discrição, cuidado e hospitalidade humana.":"From breakfast to nighttime rest, every moment is guided with discretion, care, and human hospitality.",
    "Conforto pensado para desacelerar":"Comfort designed to slow down","Privacidade e segurança da informação":"Privacy and information security","Experiências locais autênticas":"Authentic local experiences",
    "Proteção de dados:":"Data protection:","informações como nome, e-mail, telefone e dados de pagamento são utilizadas estritamente para processar reservas e prestação de atendimento hoteleiro.":"Information such as name, email, phone number, and payment details is used strictly to process reservations and provide hotel service.",
    "Onde estamos":"Find us","No coração de Brasília":"In the heart of Brasília","Ver rota no Google Maps":"View route on Google Maps",
    "Informações úteis":"Useful information","Perguntas frequentes":"Frequently asked questions",
    "Qual é o horário de check-in e check-out?":"What are the check-in and check-out times?","Como funciona o cancelamento?":"How does cancellation work?","Animais de estimação são permitidos?":"Are pets allowed?","Como meus dados pessoais são protegidos?":"How is my personal data protected?",
    "Check-in a partir das 15h e check-out até as 12h. Solicitações antecipadas podem ser confirmadas conforme disponibilidade.":"Check-in from 3 p.m. and check-out until noon. Early requests may be confirmed subject to availability.",
    "Cancelamentos gratuitos podem ser realizados até 48 horas antes da entrada. Consulte as condições da tarifa escolhida no momento da reserva.":"Free cancellations are available up to 48 hours before arrival. Review the selected rate conditions at the time of booking.",
    "Quartos selecionados recebem pets mediante consulta prévia, taxa adicional e apresentação das regras de convivência.":"Selected rooms welcome pets upon prior request, with an additional fee and acceptance of the property rules.",
    "Adotamos medidas administrativas e técnicas para proteger os dados coletados. O tratamento ocorre conforme os princípios da LGPD e apenas para a finalidade informada.":"We adopt administrative and technical measures to protect collected data. Processing follows LGPD principles and is limited to the stated purpose.",
    "Fale conosco":"Contact us","Planeje sua estadia":"Plan your stay","Nossa equipe terá prazer em ajudar você a escolher a melhor experiência.":"Our team will be delighted to help you choose the best experience.",
    "Nome completo":"Full name","E-mail":"Email","Telefone":"Phone","Mensagem":"Message","Li e aceito os":"I have read and agree to the","Termos de Uso":"Terms of Use","Política de Privacidade":"Privacy Policy",
    "Os dados coletados serão utilizados exclusivamente para a finalidade de contato e atendimento hoteleiro, em conformidade com a LGPD.":"Collected data will be used exclusively for contact and hotel service purposes, in accordance with LGPD.","Enviar mensagem":"Send message",
    "Reserva direta":"Direct booking","Sua próxima estadia começa aqui.":"Your next stay starts here.","Consultar disponibilidade":"Check availability",
    "Hospitalidade com propósito e conforto com elegância.":"Hospitality with purpose and comfort with elegance.","Links":"Links","Privacidade":"Privacy","Dados coletados exclusivamente para reservas, atendimento e suporte.":"Data collected exclusively for reservations, service, and support.",
    "© 2026 Hotel Oblívio. Todos os direitos reservados.":"© 2026 Hotel Oblívio. All rights reserved.","Seus dados estão seguros conosco em conformidade com a LGPD.":"Your data is safe with us and complies with LGPD.",
    "Privacidade e cookies":"Privacy and cookies","Usamos cookies para melhorar sua experiência. Consulte os":"We use cookies to improve your experience. Review the","Termos de Uso e a Política de Privacidade":"Terms of Use and Privacy Policy","Recusar":"Decline","Aceitar":"Accept",
    "Informação legal":"Legal information","Entendido":"Understood","Uso do site":"Website use",
    "Este website oferece informações sobre o Hotel Oblívio e permite solicitar reservas ou contato. Ao utilizá-lo, o usuário declara fornecer informações verdadeiras e utilizar os serviços de forma lícita.":"This website provides Hotel Oblívio information and allows reservation or contact requests. By using it, the user agrees to provide truthful information and use the services lawfully.",
    "Dados pessoais e LGPD":"Personal data and LGPD","Nome, e-mail, telefone, datas da estadia e dados de pagamento são coletados exclusivamente para processamento da reserva, contato hoteleiro, atendimento e prestação dos serviços solicitados.":"Name, email, phone number, stay dates, and payment details are collected exclusively for reservation processing, hotel contact, and requested service delivery.",
    "Cookies":"Cookies","Cookies essenciais podem ser utilizados para lembrar preferências e registrar o consentimento deste aviso. O usuário pode aceitar ou recusar o uso de cookies por meio do banner.":"Essential cookies may be used to remember preferences and record consent for this notice. The user can accept or reject cookies through the banner.",
    "Direitos do titular":"Data subject rights","Nos termos da LGPD, o titular pode solicitar acesso, correção, atualização, anonimização ou exclusão dos dados pessoais, conforme a natureza de cada informação, pelos canais de contato disponíveis neste site.":"Under LGPD, the data subject may request access, correction, updating, anonymization, or deletion of personal data, depending on its nature, through the contact channels available on this website.",
    "Nome, e-mail, telefone e dados de pagamento serão usados estritamente para processamento da reserva, contato hoteleiro e atendimento seguro.":"Name, email, phone number, and payment details will be used strictly for reservation processing, hotel contact, and secure service.",
    "Selecionar idioma":"Select language","Abrir menu":"Open menu","Fechar":"Close","Fechar termos":"Close terms",
    "Selecione datas válidas: a saída deve ser posterior à entrada.":"Select valid dates: check-out must be after check-in.",
    "Disponibilidade consultada. Continue para solicitar sua reserva.":"Availability checked. Continue to request your reservation.",
    "Mensagem enviada com sucesso. Obrigado pelo contato.":"Message sent successfully. Thank you for contacting us.",
    "Reservar":"Reserve","Na reserva":"Added to booking","Excluir":"Remove","reservas pendentes":"pending reservations",
    "Reserva aguardando":"Reservation pending","Nenhuma reserva selecionada.":"No reservation selected.",
    "Ir ao pagamento":"Go to payment","Pagamento da reserva":"Reservation payment","Voltar às reservas":"Back to reservations",
    "Pagamento concluído":"Payment completed","Pagamento realizado com sucesso":"Payment completed successfully",
    "Reserva confirmada":"Reservation confirmed","Código":"Code",
    "Disponibilidade definida. Agora escolha uma acomodação.":"Availability set. Now choose an accommodation.",
    "Defina as datas de entrada e saída antes de reservar.":"Set the check-in and check-out dates before booking.",
    "Escolha sua estadia":"Choose your stay","Acomodação selecionada":"Selected accommodation",
    "Você escolheu o quarto:":"You chose the room:",
    "Adicionar à reserva":"Add to reservation","Selecione uma entrada e uma saída válidas.":"Select a valid check-in and check-out.",
    "hóspede":"guest","hóspedes":"guests","Quantidade de hóspedes":"Number of guests",
    "Finalizar reserva":"Complete reservation","Fechar reserva":"Close reservation","Acomodação":"Accommodation",
    "Reservar agora":"Book now","Mapa do CCI Sênior em Samambaia":"Map of CCI Sénior in Samambaia",
    "Forma de pagamento":"Payment method","Cartão":"Card","Boleto":"Bank slip",
    "Nome impresso no cartão":"Name printed on card","Número do cartão":"Card number",
    "Validade":"Expiry date","CVV":"CVV","3 ou 4 dígitos":"3 or 4 digits",
    "NOME COMO NO CARTÃO":"NAME AS PRINTED ON CARD","Total da reserva":"Reservation total",
    "Pagar e confirmar reserva":"Pay and confirm reservation","Concluir":"Finish",
    "A saída deve ser posterior à entrada.":"Check-out must be after check-in.",
    "Informe um cartão válido e uma validade futura.":"Enter a valid card and a future expiry date."
  }
};

const originalTextNodes = [];
const originalAttributes = [];

const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
  acceptNode(node) {
    const parent = node.parentElement;
    if (!parent || !node.textContent.trim()) return NodeFilter.FILTER_REJECT;
    if (parent.closest("script, style, [data-no-translate]")) return NodeFilter.FILTER_REJECT;
    return NodeFilter.FILTER_ACCEPT;
  }
});
while (walker.nextNode()) {
  originalTextNodes.push({ node: walker.currentNode, original: walker.currentNode.textContent });
}

document.querySelectorAll("[placeholder], [title], [aria-label], [alt]").forEach((element) => {
  ["placeholder", "title", "aria-label", "alt"].forEach((attribute) => {
    if (element.hasAttribute(attribute) && !element.closest("[data-no-translate]")) {
      originalAttributes.push({ element, attribute, original: element.getAttribute(attribute) });
    }
  });
});

class LanguageManager {
  constructor(dictionary, textNodes, attributes) {
    this.dictionary = dictionary;
    this.textNodes = textNodes;
    this.attributes = attributes;
    this.storageKey = "hotel-oblivio-language";
    this.language = localStorage.getItem(this.storageKey) || "pt-BR";
    this.buttons = document.querySelectorAll(".language-button");
    this.bindEvents();
  }

  bindEvents() {
    this.buttons.forEach((button) => {
      button.addEventListener("click", () => {
        this.changeLanguage(button.dataset.language);
      });
    });
  }

  translateStaticContent(language) {
    this.textNodes.forEach(({ node, original }) => {
      const leading = original.match(/^\s*/)?.[0] || "";
      const trailing = original.match(/\s*$/)?.[0] || "";
      const text = original.trim();
      const translated = language === "pt-BR" ? text : this.dictionary[language]?.[text] || text;
      node.textContent = leading + translated + trailing;
    });

    this.attributes.forEach(({ element, attribute, original }) => {
      const translated = language === "pt-BR"
        ? original
        : this.dictionary[language]?.[original] || original;
      element.setAttribute(attribute, translated);
    });
  }

  updateButtons() {
    this.buttons.forEach((button) => {
      const active = button.dataset.language === this.language;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  changeLanguage(language) {
    this.language = language;
    document.documentElement.lang = language;
    this.translateStaticContent(language);
    localStorage.setItem(this.storageKey, language);
    this.updateButtons();
    setTimeout(() => {
      if (typeof renderPendingReservations === "function" &&
          typeof pendingReservations !== "undefined") {
        renderPendingReservations();
      }
      document.querySelectorAll(".room-button").forEach((button) => {
        const roomName = button.closest(".room-card").dataset.room;
        const selected = Array.isArray(pendingReservations) &&
          pendingReservations.some((item) => item.room === roomName);
        button.textContent = selected ? getText("Na reserva") : getText("Reservar");
      });
    }, 0);
  }

  initialize() {
    this.changeLanguage(this.language);
  }
}

const languageManager = new LanguageManager(
  translations,
  originalTextNodes,
  originalAttributes
);
languageManager.initialize();

const today = new Date();
const toDateValue = (date) => {
  const offset = date.getTimezoneOffset();
  return new Date(date.getTime() - offset * 60000).toISOString().split("T")[0];
};
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);
const dayAfter = new Date(today);
dayAfter.setDate(today.getDate() + 2);
document.querySelectorAll('input[name="checkin"]').forEach((input) => {
  input.min = toDateValue(today);
});
document.querySelectorAll('input[name="checkout"]').forEach((input) => {
  input.min = toDateValue(tomorrow);
});

menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!open));
  mainNav.classList.toggle("open", !open);
});
mainNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  mainNav.classList.remove("open"); menuToggle.setAttribute("aria-expanded", "false");
}));

document.querySelectorAll(".faq-item button").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const open = item.classList.contains("open");
    document.querySelectorAll(".faq-item").forEach((faq) => {
      faq.classList.remove("open");
      faq.querySelector("button").setAttribute("aria-expanded", "false");
    });
    if (!open) {
      item.classList.add("open");
      button.setAttribute("aria-expanded", "true");
    }
  });
});

const reservationDialog = document.querySelector("#reservation-dialog");
const reservationModal = document.querySelector("#reservation-modal");
const reservationCardFields = reservationModal.querySelector(".reservation-card-fields");
const reservationTotal = document.querySelector("#reservation-total");
const paymentRoomSelection = document.querySelector("#payment-room-selection");
const pendingList = document.querySelector("#pending-list");
const pendingView = document.querySelector("#pending-view");
const paymentView = document.querySelector("#payment-view");
const successView = document.querySelector("#success-view");
const selectionView = document.querySelector("#selection-view");
const reservationBadge = document.querySelector("#reservation-badge");
let pendingReservations = [];
let paymentReservation = null;

const getText = (text) => {
  const language = document.documentElement.lang || "pt-BR";
  return language === "pt-BR" ? text : translations[language]?.[text] || text;
};

const formatCurrency = (value) =>
  new Intl.NumberFormat(document.documentElement.lang, {
    style: "currency",
    currency: "BRL"
  }).format(value);

function renderPendingReservations() {
  pendingList.innerHTML = "";
  const empty = pendingView.querySelector(".pending-empty");
  empty.hidden = pendingReservations.length > 0;
  pendingView.querySelector(".go-payment").disabled = pendingReservations.length === 0;
  pendingReservations.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "pending-reservation";
    card.innerHTML = `
      <div><strong></strong><span></span></div>
      <button class="remove-reservation" type="button"></button>`;
    card.querySelector("strong").textContent = getText(item.room);
    card.querySelector("span").textContent =
      `${getText("Entrada")}: ${item.checkin} · ${getText("Saída")}: ${item.checkout} · ${item.guests} ${item.guests === "1" ? getText("hóspede") : getText("hóspedes")}`;
    const removeButton = card.querySelector(".remove-reservation");
    removeButton.textContent = getText("Excluir");
    removeButton.setAttribute("aria-label", `${getText("Excluir")} ${item.room}`);
    removeButton.addEventListener("click", () => {
      pendingReservations.splice(index, 1);
      renderPendingReservations();
      document.querySelectorAll(".room-button").forEach((button) => {
        if (!pendingReservations.some((item) => item.room === button.closest(".room-card").dataset.room)) {
          button.textContent = getText("Reservar");
        }
      });
    });
    pendingList.appendChild(card);
  });
  reservationBadge.hidden = pendingReservations.length === 0;
  reservationBadge.textContent = String(pendingReservations.length);
  reservationBadge.setAttribute("aria-label", `${pendingReservations.length} ${getText("reservas pendentes")}`);
  document.querySelectorAll(".room-button").forEach((button) => {
    const roomName = button.closest(".room-card").dataset.room;
    const selected = pendingReservations.some((item) => item.room === roomName);
    button.textContent = selected ? getText("Na reserva") : getText("Reservar");
  });
}

function showPendingView() {
  paymentReservation = null;
  pendingView.hidden = false;
  paymentView.hidden = true;
  successView.hidden = true;
  selectionView.hidden = true;
  document.querySelector("#reservation-title").textContent = getText("Reserva aguardando");
  renderPendingReservations();
}

let selectedRoomForStay = "";

function showStaySelection(roomName) {
  selectedRoomForStay = roomName;
  pendingView.hidden = true;
  paymentView.hidden = true;
  successView.hidden = true;
  selectionView.hidden = false;
  document.querySelector("#reservation-title").textContent = getText("Escolha sua estadia");
  selectionView.querySelector(".selection-room").textContent =
    `${getText("Acomodação selecionada")}: ${getText(roomName)}`;
  selectionView.querySelector(".selection-status").textContent = "";

  const checkin = selectionView.querySelector("#selection-checkin");
  const checkout = selectionView.querySelector("#selection-checkout");
  const today = new Date();
  checkin.min = toDateValue(today);
  checkout.min = toDateValue(new Date(today.getTime() + 86400000));
  checkin.value = availabilityForm.elements.checkin.value || "";
  checkout.value = availabilityForm.elements.checkout.value || "";
  selectionView.querySelector("#selection-guests").value =
    availabilityForm.elements.guests?.value || "2";

  reservationDialog.showModal();
  document.body.classList.add("locked");
}

function updateReservationTotal() {
  const checkin = reservationModal.elements.checkin.value;
  const checkout = reservationModal.elements.checkout.value;
  const roomCard = [...document.querySelectorAll(".room-card")]
    .find((card) => card.dataset.room === paymentReservation?.room);
  const submitButton = reservationModal.querySelector(".payment-view .modal-submit");
  const nightlyRate = Number(roomCard?.dataset.price);
  const nights = (
    Date.parse(`${checkout}T00:00:00Z`) -
    Date.parse(`${checkin}T00:00:00Z`)
  ) / 86400000;
  if (!checkin || !checkout || !roomCard || !Number.isFinite(nightlyRate) ||
      nightlyRate <= 0 || !Number.isInteger(nights) || nights <= 0) {
    reservationTotal.textContent = formatCurrency(0);
    submitButton.disabled = true;
    return;
  }
  reservationTotal.textContent = formatCurrency(nights * nightlyRate);
  submitButton.disabled = false;
}

function openReservation() {
  if (availabilityForm.elements.checkin.value) {
    reservationModal.elements.checkin.value = availabilityForm.elements.checkin.value;
  }
  if (availabilityForm.elements.checkout.value) {
    reservationModal.elements.checkout.value = availabilityForm.elements.checkout.value;
  }
  reservationModal.querySelector(".reservation-status").textContent = "";
  updateReservationTotal();
  showPendingView();
  reservationDialog.showModal();
  document.body.classList.add("locked");
}

function togglePendingReservation(roomName, button) {
  const existingIndex = pendingReservations.findIndex((item) => item.room === roomName);
  if (existingIndex >= 0) {
    pendingReservations.splice(existingIndex, 1);
  } else {
    pendingReservations.push({
      room: roomName,
      checkin: availabilityForm.elements.checkin.value ||
        reservationModal.elements.checkin.value,
      checkout: availabilityForm.elements.checkout.value ||
        reservationModal.elements.checkout.value
    });
  }
  const selected = pendingReservations.some((item) => item.room === roomName);
  button.textContent = selected ? getText("Na reserva") : getText("Reservar");
  renderPendingReservations();
}

document.querySelectorAll(".room-button").forEach((button) => {
  button.addEventListener("click", () => {
    const roomName = button.closest(".room-card").dataset.room;
    showStaySelection(roomName);
  });
});

selectionView.querySelector("#selection-checkin").addEventListener("change", (event) => {
  const checkin = event.target.value;
  const checkout = selectionView.querySelector("#selection-checkout");
  if (!checkin) return;
  const nextDay = new Date(`${checkin}T12:00:00`);
  nextDay.setDate(nextDay.getDate() + 1);
  checkout.min = toDateValue(nextDay);
  if (!checkout.value || checkout.value <= checkin) checkout.value = "";
});

selectionView.querySelector(".selection-confirm").addEventListener("click", () => {
  const checkin = selectionView.querySelector("#selection-checkin");
  const checkout = selectionView.querySelector("#selection-checkout");
  const guests = selectionView.querySelector("#selection-guests").value;
  const status = selectionView.querySelector(".selection-status");
  if (!checkin.value || !checkout.value || checkout.value <= checkin.value) {
    status.textContent = getText("Selecione uma entrada e uma saída válidas.");
    return;
  }

  const existingIndex = pendingReservations.findIndex((item) => item.room === selectedRoomForStay);
  const reservation = {
    room: selectedRoomForStay,
    checkin: checkin.value,
    checkout: checkout.value,
    guests
  };
  if (existingIndex >= 0) pendingReservations[existingIndex] = reservation;
  else pendingReservations.push(reservation);

  availabilityForm.elements.checkin.value = checkin.value;
  availabilityForm.elements.checkout.value = checkout.value;
  availabilityForm.elements.guests.value = guests;
  showPendingView();
});
document.querySelectorAll("[data-open-reservation], .nav-cta").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    openReservation();
  });
});
pendingView.querySelector(".go-payment").addEventListener("click", () => {
  if (!pendingReservations.length) return;
  const first = pendingReservations[0];
  paymentReservation = first;
  paymentRoomSelection.textContent =
    `${getText("Você escolheu o quarto:")} ${getText(first.room)}`;
  reservationModal.elements.checkin.value = first.checkin;
  reservationModal.elements.checkout.value = first.checkout;
  pendingView.hidden = true;
  paymentView.hidden = false;
  document.querySelector("#reservation-title").textContent = getText("Pagamento da reserva");
  updateReservationTotal();
});
reservationModal.querySelector(".back-to-reservation").addEventListener("click", showPendingView);
reservationModal.querySelector(".success-close").addEventListener("click", () => reservationDialog.close());
reservationModal.querySelector(".modal-close").addEventListener("click", () => reservationDialog.close());
reservationDialog.addEventListener("close", () => document.body.classList.remove("locked"));
reservationDialog.addEventListener("click", (event) => {
  if (event.target === reservationDialog || !reservationModal.contains(event.target)) reservationDialog.close();
});
[reservationModal.elements.checkin, reservationModal.elements.checkout].forEach((input) => {
  input.addEventListener("change", updateReservationTotal);
});

reservationModal.elements.checkin.addEventListener("change", () => {
  if (!reservationModal.elements.checkin.value) return;
  const nextDay = new Date(`${reservationModal.elements.checkin.value}T12:00:00`);
  nextDay.setDate(nextDay.getDate() + 1);
  const nextDayValue = toDateValue(nextDay);
  reservationModal.elements.checkout.min = nextDayValue;
  if (!reservationModal.elements.checkout.value || reservationModal.elements.checkout.value <= reservationModal.elements.checkin.value) {
    reservationModal.elements.checkout.value = nextDayValue;
  }
  availabilityForm.elements.checkin.value = reservationModal.elements.checkin.value;
  availabilityForm.elements.checkout.value = reservationModal.elements.checkout.value;
  updateReservationTotal();
});
reservationModal.elements.checkout.addEventListener("change", () => {
  availabilityForm.elements.checkout.value = reservationModal.elements.checkout.value;
  updateReservationTotal();
});

availabilityForm.elements.checkin.addEventListener("change", () => {
  if (!availabilityForm.elements.checkin.value) return;
  const nextDay = new Date(`${availabilityForm.elements.checkin.value}T12:00:00`);
  nextDay.setDate(nextDay.getDate() + 1);
  const nextDayValue = toDateValue(nextDay);
  availabilityForm.elements.checkout.min = nextDayValue;
  if (!availabilityForm.elements.checkout.value ||
      availabilityForm.elements.checkout.value <= availabilityForm.elements.checkin.value) {
    availabilityForm.elements.checkout.value = "";
  }
  reservationModal.elements.checkin.value = availabilityForm.elements.checkin.value;
});
availabilityForm.elements.checkout.addEventListener("change", () => {
  reservationModal.elements.checkout.value = availabilityForm.elements.checkout.value;
});

availabilityForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const checkin = availabilityForm.elements.checkin.value;
  const checkout = availabilityForm.elements.checkout.value;
  if (!checkin || !checkout || checkout <= checkin) {
    availabilityForm.querySelector(".widget-notice").textContent =
      getText("Selecione datas válidas: a saída deve ser posterior à entrada.");
    return;
  }
  availabilityForm.querySelector(".widget-notice").textContent =
    getText("Disponibilidade definida. Agora escolha uma acomodação.");
  document.querySelector("#acomodacoes").scrollIntoView({ behavior: "smooth" });
});

reservationModal.querySelectorAll('[name="paymentMethod"]').forEach((radio) => {
  radio.addEventListener("change", () => {
    const useCard = reservationModal.elements.paymentMethod.value === "card";
    reservationCardFields.hidden = !useCard;
    reservationModal.elements.cardName.required = useCard;
    reservationModal.elements.cardNumber.required = useCard;
    reservationModal.elements.cardExpiry.required = useCard;
    reservationModal.elements.cardCvv.required = useCard;
  });
});

reservationModal.elements.cardNumber.addEventListener("input", () => {
  reservationModal.elements.cardNumber.value = reservationModal.elements.cardNumber.value
    .replace(/\D/g, "").slice(0, 19).replace(/(.{4})/g, "$1 ").trim();
});
reservationModal.elements.cardName.addEventListener("input", () => {
  reservationModal.elements.cardName.value = reservationModal.elements.cardName.value
    .replace(/[^A-Za-zÀ-ÿ ]/g, "").toUpperCase();
});
reservationModal.elements.cardExpiry.addEventListener("input", () => {
  let digits = reservationModal.elements.cardExpiry.value.replace(/\D/g, "").slice(0, 4);
  if (digits.length > 2) digits = `${digits.slice(0, 2)}/${digits.slice(2)}`;
  reservationModal.elements.cardExpiry.value = digits;
});
reservationModal.elements.cardCvv.addEventListener("input", () => {
  reservationModal.elements.cardCvv.value = reservationModal.elements.cardCvv.value.replace(/\D/g, "").slice(0, 4);
});

reservationModal.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!reservationModal.checkValidity()) {
    reservationModal.reportValidity();
    return;
  }
  const checkin = reservationModal.elements.checkin.value;
  const checkout = reservationModal.elements.checkout.value;
  if (!checkin || !checkout || checkout <= checkin) {
    reservationModal.elements.checkout.setCustomValidity(getText("A saída deve ser posterior à entrada."));
    reservationModal.reportValidity();
    reservationModal.elements.checkout.setCustomValidity("");
    return;
  }
  const method = reservationModal.elements.paymentMethod.value;
  if (method === "card") {
    const digits = reservationModal.elements.cardNumber.value.replace(/\D/g, "");
    const expiry = reservationModal.elements.cardExpiry.value.match(/^(\d{2})\/(\d{2})$/);
    const now = new Date();
    const month = expiry ? Number(expiry[1]) : 0;
    const year = expiry ? Number(expiry[2]) : 0;
    if (digits.length < 13 || digits.length > 19 ||
      !expiry || month < 1 || month > 12 ||
      year < now.getFullYear() % 100 ||
      (year === now.getFullYear() % 100 && month < now.getMonth() + 1)) {
      reservationModal.elements.cardExpiry.setCustomValidity(
        getText("Informe um cartão válido e uma validade futura.")
      );
      reservationModal.reportValidity();
      reservationModal.elements.cardExpiry.setCustomValidity("");
      return;
    }
  }
  const code = `HOB-${Date.now().toString().slice(-6)}`;
  const successMessage = `${getText("Reserva confirmada")}. ${getText("Código")}: ${code}`;
  successView.querySelector(".success-message").textContent = successMessage;
  paymentView.hidden = true;
  successView.hidden = false;
  document.querySelector("#reservation-title").textContent = getText("Pagamento concluído");
  pendingReservations = [];
  renderPendingReservations();
  document.querySelectorAll(".room-button").forEach((button) => {
    button.textContent = getText("Reservar");
  });
});
document.querySelectorAll('input[name="phone"]').forEach((input) => {
  input.addEventListener("input", () => {
    const digits = input.value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 2) {
      input.value = digits;
    } else {
      input.value = `(${digits.slice(0, 2)}) ${digits.length > 10
        ? `${digits.slice(2, 7)}-${digits.slice(7)}`
        : `${digits.slice(2, 6)}-${digits.slice(6)}`}`;
    }
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }
  const phoneDigits = contactForm.elements.phone.value.replace(/\D/g, "");
  if (phoneDigits.length < 10 || phoneDigits.length > 11) return;
  contactForm.querySelector(".form-status").textContent =
    getText("Mensagem enviada com sucesso. Obrigado pelo contato.");
  contactForm.reset();
});

const cookieConsentKey = "hotel-oblivio-cookie-consent";
const saveCookieConsent = (choice) => {
  try { localStorage.setItem(cookieConsentKey, choice); } catch (error) {
    console.warn("Não foi possível salvar a preferência de cookies neste navegador.", error);
  }
  cookieBanner.classList.remove("show");
};
document.querySelector("#accept-cookies").addEventListener("click", () => saveCookieConsent("accepted"));
document.querySelector("#reject-cookies").addEventListener("click", () => saveCookieConsent("rejected"));
let cookieConsent = null;
try { cookieConsent = localStorage.getItem(cookieConsentKey); } catch (error) {
  console.warn("Não foi possível ler a preferência de cookies neste navegador.", error);
}
if (!cookieConsent) window.setTimeout(() => cookieBanner.classList.add("show"), 700);

const openPolicy = () => { if (!policyDialog.open) policyDialog.showModal(); };
document.querySelectorAll("[data-open-policy], .policy-link").forEach((link) => {
  link.addEventListener("click", (event) => { event.preventDefault(); openPolicy(); });
});
policyDialog.querySelector(".policy-close").addEventListener("click", () => policyDialog.close());
policyDialog.querySelector(".policy-understood").addEventListener("click", () => policyDialog.close());
policyDialog.addEventListener("click", (event) => {
  if (event.target === policyDialog || !policyModal.contains(event.target)) policyDialog.close();
});
