// Hotel Oblívio — JavaScript orientado a objetos para um portfólio acadêmico.

const translations = {
  "pt-BR": {
    openMenu:"Abrir menu", mainNavigation:"Navegação principal", brandHome:"Hotel Oblívio, página inicial", logoAlt:"Logo do Hotel Oblívio",
    home:"Home", accommodations:"Acomodações", location:"Localização", contact:"Contato", reservations:"Reservas", changeLanguage:"Alterar idioma",
    heroEyebrow:"Uma estadia memorável", heroTitle:"Silêncio, conforto e hospitalidade.", heroText:"Um refúgio contemporâneo para desacelerar, descansar e reconhecer cada detalhe.", discoverRooms:"Conhecer acomodações",
    stayWithUs:"Hospede-se", roomsIntro:"Espaços acolhedores, pensados para o seu melhor descanso.", suiteHorizonte:"Suíte Horizonte", patioRoom:"Quarto Pátio", fogSuite:"Suíte Neblina",
    suiteHorizonteAlt:"Suíte Horizonte com cama ampla", patioRoomAlt:"Quarto Pátio com decoração natural", fogSuiteAlt:"Suíte Neblina elegante com cama ampla",
    sereneView:"Vista serena", intimateRoom:"Ambiente íntimo", premiumSuite:"Suíte premium", twoGuests:"2 hóspedes", perNight:"/ noite", checkin:"Entrada", checkout:"Saída", addReservation:"Adicionar à reserva",
    whereWeAre:"Onde estamos", openMaps:"Abrir no Google Maps", contactUs:"Fale conosco", planStay:"Planeje sua estadia", nameLabel:"Nome", emailLabel:"E-mail", messageLabel:"Mensagem", sendMessage:"Enviar mensagem",
    yourStay:"Sua estadia", closeCart:"Fechar carrinho", emptyCart:"Nenhum quarto selecionado.", total:"Total", requestReservation:"Solicitar reserva",
    academicDisclaimer:"Projeto acadêmico e hipotético — sem operação comercial real.", securePayment:"Pagamento seguro", finalizeReservation:"Finalizar reserva", closePayment:"Fechar pagamento",
    reservationTotal:"Total da reserva", paymentMethod:"Forma de pagamento", creditCard:"Cartão de crédito", bankSlip:"Boleto", nameOnCard:"Nome impresso no cartão", fullName:"Nome completo", holderCpf:"CPF do titular", cardNumber:"Número do cartão", expiry:"Validade",
    installments:"Parcelamento", installment1:"1x sem juros", installment2:"2x sem juros", installment3:"3x sem juros", installment6:"6x sem juros", installment12:"12x sem juros", pixInstructions:"Finalize copiando a chave Pix abaixo e registre o pagamento na confirmação.", pixKey:"Chave Pix", copyKey:"Copiar chave",
    boletoInstructions:"Informe seus dados para gerar o boleto bancário demonstrativo.", yourFullName:"Seu nome completo", demoBarcode:"Código de barras demonstrativo", copyCode:"Copiar código", confirmReservation:"Confirmar reserva",
    demoDisclaimer:"Ambiente acadêmico demonstrativo. Nenhum dado financeiro é enviado e nenhuma cobrança é realizada.", chooseLanguage:"Escolha sua linguagem de preferência",
    copied:"Copiado para a área de transferência.", copyManually:"Selecione o texto e copie manualmente.", contactSuccess:"Mensagem enviada com sucesso. Obrigado pelo contato.", languageSelected:"Idioma selecionado:",
    invalidStay:"A data de saída deve ser posterior à entrada.", addedReservation:"adicionada à reserva.", removeRoom:"Remover quarto da reserva", night:"noite", nights:"noites", room:"quarto", rooms:"quartos",
    invalidCardName:"Informe o nome impresso e um CPF válido.", invalidCard:"Confira os dados do cartão de crédito.", invalidBoleto:"Preencha nome, CPF e e-mail válidos para gerar o boleto.", boletoGenerated:"Boleto demonstrativo gerado. Nenhum pagamento real foi criado.",
    pixConfirmed:"Reserva confirmada. O Pix foi registrado em modo demonstrativo.", cardConfirmed:"Reserva confirmada por cartão em modo demonstrativo."
  },
  "en": {
    openMenu:"Open menu", mainNavigation:"Main navigation", brandHome:"Hotel Oblívio, home page", logoAlt:"Hotel Oblívio logo",
    home:"Home", accommodations:"Rooms", location:"Location", contact:"Contact", reservations:"Reservations", changeLanguage:"Change language",
    heroEyebrow:"A memorable stay", heroTitle:"Silence, comfort and hospitality.", heroText:"A contemporary retreat to slow down, rest and notice every detail.", discoverRooms:"Discover our rooms",
    stayWithUs:"Stay with us", roomsIntro:"Welcoming spaces designed for your best rest.", suiteHorizonte:"Horizon Suite", patioRoom:"Patio Room", fogSuite:"Mist Suite",
    suiteHorizonteAlt:"Horizon Suite with a large bed", patioRoomAlt:"Patio Room with natural decor", fogSuiteAlt:"Elegant Mist Suite with a large bed",
    sereneView:"Serene view", intimateRoom:"Intimate atmosphere", premiumSuite:"Premium suite", twoGuests:"2 guests", perNight:"/ night", checkin:"Check-in", checkout:"Check-out", addReservation:"Add to reservation",
    whereWeAre:"Where we are", openMaps:"Open in Google Maps", contactUs:"Contact us", planStay:"Plan your stay", nameLabel:"Name", emailLabel:"Email", messageLabel:"Message", sendMessage:"Send message",
    yourStay:"Your stay", closeCart:"Close cart", emptyCart:"No rooms selected.", total:"Total", requestReservation:"Request reservation",
    academicDisclaimer:"Academic and hypothetical project — not a commercial operation.", securePayment:"Secure payment", finalizeReservation:"Complete reservation", closePayment:"Close payment",
    reservationTotal:"Reservation total", paymentMethod:"Payment method", creditCard:"Credit card", bankSlip:"Bank slip", nameOnCard:"Name on card", fullName:"Full name", holderCpf:"Cardholder tax ID", cardNumber:"Card number", expiry:"Expiry",
    installments:"Installments", installment1:"1x interest-free", installment2:"2x interest-free", installment3:"3x interest-free", installment6:"6x interest-free", installment12:"12x interest-free", pixInstructions:"Finish by copying the Pix key below and confirming your payment.", pixKey:"Pix key", copyKey:"Copy key",
    boletoInstructions:"Enter your details to generate the demonstration bank slip.", yourFullName:"Your full name", demoBarcode:"Demonstration barcode", copyCode:"Copy code", confirmReservation:"Confirm reservation",
    demoDisclaimer:"Demonstration academic environment. No financial data is sent and no charge is made.", chooseLanguage:"Choose your preferred language",
    copied:"Copied to the clipboard.", copyManually:"Select the text and copy it manually.", contactSuccess:"Message sent successfully. Thank you for contacting us.", languageSelected:"Selected language:",
    invalidStay:"Check-out must be after check-in.", addedReservation:"added to the reservation.", removeRoom:"Remove room from reservation", night:"night", nights:"nights", room:"room", rooms:"rooms",
    invalidCardName:"Enter the printed name and a valid tax ID.", invalidCard:"Check the credit card details.", invalidBoleto:"Enter a valid name, tax ID and email to generate the bank slip.", boletoGenerated:"Demonstration bank slip generated. No real payment was created.",
    pixConfirmed:"Reservation confirmed. Pix was recorded in demonstration mode.", cardConfirmed:"Reservation confirmed by card in demonstration mode."
  },
  "es": {
    openMenu:"Abrir menú", mainNavigation:"Navegación principal", brandHome:"Hotel Oblívio, página de inicio", logoAlt:"Logotipo del Hotel Oblívio",
    home:"Inicio", accommodations:"Habitaciones", location:"Ubicación", contact:"Contacto", reservations:"Reservas", changeLanguage:"Cambiar idioma",
    heroEyebrow:"Una estancia memorable", heroTitle:"Silencio, confort y hospitalidad.", heroText:"Un refugio contemporáneo para desacelerar, descansar y apreciar cada detalle.", discoverRooms:"Descubrir habitaciones",
    stayWithUs:"Hospédese con nosotros", roomsIntro:"Espacios acogedores, pensados para su mejor descanso.", suiteHorizonte:"Suite Horizonte", patioRoom:"Habitación Patio", fogSuite:"Suite Neblina",
    suiteHorizonteAlt:"Suite Horizonte con cama amplia", patioRoomAlt:"Habitación Patio con decoración natural", fogSuiteAlt:"Suite Neblina elegante con cama amplia",
    sereneView:"Vista serena", intimateRoom:"Ambiente íntimo", premiumSuite:"Suite premium", twoGuests:"2 huéspedes", perNight:"/ noche", checkin:"Entrada", checkout:"Salida", addReservation:"Añadir a la reserva",
    whereWeAre:"Dónde estamos", openMaps:"Abrir en Google Maps", contactUs:"Contáctenos", planStay:"Planifique su estancia", nameLabel:"Nombre", emailLabel:"Correo electrónico", messageLabel:"Mensaje", sendMessage:"Enviar mensaje",
    yourStay:"Su estancia", closeCart:"Cerrar carrito", emptyCart:"No hay habitaciones seleccionadas.", total:"Total", requestReservation:"Solicitar reserva",
    academicDisclaimer:"Proyecto académico e hipotético — no es una operación comercial.", securePayment:"Pago seguro", finalizeReservation:"Finalizar reserva", closePayment:"Cerrar pago",
    reservationTotal:"Total de la reserva", paymentMethod:"Forma de pago", creditCard:"Tarjeta de crédito", bankSlip:"Boleto bancario", nameOnCard:"Nombre impreso en la tarjeta", fullName:"Nombre completo", holderCpf:"DNI/NIF del titular", cardNumber:"Número de tarjeta", expiry:"Caducidad",
    installments:"Cuotas", installment1:"1x sin intereses", installment2:"2x sin intereses", installment3:"3x sin intereses", installment6:"6x sin intereses", installment12:"12x sin intereses", pixInstructions:"Finalice copiando la clave Pix abajo y registre el pago al confirmar.", pixKey:"Clave Pix", copyKey:"Copiar clave",
    boletoInstructions:"Introduzca sus datos para generar el boleto bancario demostrativo.", yourFullName:"Su nombre completo", demoBarcode:"Código de barras demostrativo", copyCode:"Copiar código", confirmReservation:"Confirmar reserva",
    demoDisclaimer:"Entorno académico demostrativo. No se envían datos financieros ni se realiza ningún cobro.", chooseLanguage:"Elija su idioma preferido",
    copied:"Copiado al portapapeles.", copyManually:"Seleccione el texto y cópielo manualmente.", contactSuccess:"Mensaje enviado correctamente. Gracias por contactarnos.", languageSelected:"Idioma seleccionado:",
    invalidStay:"La salida debe ser posterior a la entrada.", addedReservation:"añadida a la reserva.", removeRoom:"Eliminar habitación de la reserva", night:"noche", nights:"noches", room:"habitación", rooms:"habitaciones",
    invalidCardName:"Introduzca el nombre impreso y un documento válido.", invalidCard:"Revise los datos de la tarjeta de crédito.", invalidBoleto:"Complete nombre, documento y correo válidos para generar el boleto.", boletoGenerated:"Boleto demostrativo generado. No se creó ningún pago real.",
    pixConfirmed:"Reserva confirmada. El Pix fue registrado en modo demostrativo.", cardConfirmed:"Reserva confirmada con tarjeta en modo demostrativo."
  }
};

let currentLanguage = localStorage.getItem("hotel-oblivio-language") || "pt-BR";

function t(key) {
  return translations[currentLanguage]?.[key] || translations["pt-BR"][key] || key;
}

function applyTranslations() {
  document.documentElement.lang = currentLanguage;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const text = t(element.dataset.i18n);
    if (element.tagName === "H1" || element.dataset.i18n === "heroTitle") {
      const parts = text.split(" and ");
      element.textContent = text;
    } else {
      element.textContent = text;
    }
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => element.placeholder = t(element.dataset.i18nPlaceholder));
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => element.alt = t(element.dataset.i18nAlt));
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => element.setAttribute("aria-label", t(element.dataset.i18nAria)));
  document.title = currentLanguage === "en" ? "Hotel Oblívio | Accommodation" : currentLanguage === "es" ? "Hotel Oblívio | Hospedaje" : "Hotel Oblívio | Hospedagem";
  const languageToggle = document.getElementById("language-toggle");
  if (languageToggle) {
    document.getElementById("language-flag").textContent =
      currentLanguage === "pt-BR" ? "🇧🇷" : currentLanguage === "en" ? "🇺🇸" : "🇪🇸";
    languageToggle.setAttribute("aria-label", t("changeLanguage"));
  }
  const cartCount = document.getElementById("cart-count");
  if (cartCount) cartCount.setAttribute("aria-label", `${cartCount.textContent} ${Number(cartCount.textContent) === 1 ? t("room") : t("rooms")}`);
}

class ReservationCart {
  constructor(containerId, totalId, countId) {
    this.items = [];
    this.container = document.getElementById(containerId);
    this.totalElement = document.getElementById(totalId);
    this.countElement = document.getElementById(countId);
  }

  add(room, price, checkin, checkout, nights, roomKey = "") {
    this.items.push({ id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()), room, roomKey, price, checkin, checkout, nights });
    this.render();
  }

  remove(id) {
    this.items = this.items.filter((item) => item.id !== id);
    this.render();
  }

  list() {
    return [...this.items];
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.price * item.nights, 0);
  }

  clear() {
    this.items = [];
    this.render();
  }

  formatMoney(value) {
    return new Intl.NumberFormat(currentLanguage === "en" ? "en-US" : currentLanguage === "es" ? "es-ES" : "pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(value);
  }

  formatDate(value) {
    return new Intl.DateTimeFormat(currentLanguage === "en" ? "en-US" : currentLanguage === "es" ? "es-ES" : "pt-BR", { day: "2-digit", month: "short" }).format(new Date(`${value}T12:00:00`));
  }

  render() {
    this.container.replaceChildren();
    if (!this.items.length) {
      const empty = document.createElement("p");
      empty.className = "empty-cart";
      empty.textContent = t("emptyCart");
      this.container.append(empty);
    }

    this.items.forEach((item) => {
      const article = document.createElement("article");
      article.className = "cart-item";
      article.innerHTML = `<div><h3></h3><p></p><strong></strong></div><button type="button" class="remove-item" title="Remover quarto" aria-label="Remover ${item.room} da reserva"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18"/><path d="M8 6V4h8v2M19 6l-1 14H6L5 6"/><path d="M10 10v6M14 10v6"/></svg></button>`;
      article.querySelector("h3").textContent = item.roomKey ? t(item.roomKey) : item.room;
      const dateConnector = currentLanguage === "en" ? "to" : currentLanguage === "es" ? "al" : "a";
      article.querySelector("p").textContent = `${this.formatDate(item.checkin)} ${dateConnector} ${this.formatDate(item.checkout)} · ${item.nights} ${item.nights === 1 ? t("night") : t("nights")}`;
      article.querySelector("strong").textContent = this.formatMoney(item.price * item.nights);
      const removeButton = article.querySelector("button");
      removeButton.setAttribute("aria-label", `${t("removeRoom")}: ${item.roomKey ? t(item.roomKey) : item.room}`);
      removeButton.addEventListener("click", () => this.remove(item.id));
      this.container.append(article);
    });

    this.totalElement.textContent = this.formatMoney(this.getTotal());
    this.countElement.textContent = String(this.items.length);
    this.countElement.setAttribute("aria-label", `${this.items.length} ${this.items.length === 1 ? t("room") : t("rooms")}`);
    document.getElementById("checkout-button").disabled = this.items.length === 0;
  }
}

const cart = new ReservationCart("cart-items", "cart-total", "cart-count");
const cartElement = document.getElementById("reservation-cart");
const cartToggle = document.getElementById("cart-toggle");
const cartClose = document.getElementById("cart-close");
const cartOverlay = document.getElementById("cart-overlay");
const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");
const toast = document.getElementById("toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 3200);
}

function openCart() {
  cartElement.classList.add("open");
  cartElement.setAttribute("aria-hidden", "false");
  cartToggle.setAttribute("aria-expanded", "true");
  cartOverlay.hidden = false;
  document.body.classList.add("locked");
  cartClose.focus();
}

function closeCart() {
  cartElement.classList.remove("open");
  cartElement.setAttribute("aria-hidden", "true");
  cartToggle.setAttribute("aria-expanded", "false");
  cartOverlay.hidden = true;
  document.body.classList.remove("locked");
}

cartToggle.addEventListener("click", openCart);
cartClose.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

function nightsBetween(checkin, checkout) {
  return Math.round((Date.parse(`${checkout}T00:00:00Z`) - Date.parse(`${checkin}T00:00:00Z`)) / 86400000);
}

const today = new Date();
const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);

document.querySelectorAll(".room-card").forEach((card) => {
  const form = card.querySelector(".booking-form");
  const checkin = form.elements.checkin;
  const checkout = form.elements.checkout;
  checkin.min = localToday;
  checkout.min = localToday;
  checkin.addEventListener("change", () => {
    checkout.min = checkin.value || localToday;
    if (checkout.value && checkout.value <= checkin.value) checkout.value = "";
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkout.setCustomValidity(checkin.value && checkout.value <= checkin.value ? t("invalidStay") : "");
    if (!form.reportValidity()) return;
    const nights = nightsBetween(checkin.value, checkout.value);
    cart.add(card.dataset.room, Number(card.dataset.price), checkin.value, checkout.value, nights, card.dataset.roomKey);
    showToast(`${card.dataset.roomKey ? t(card.dataset.roomKey) : card.dataset.room} ${t("addedReservation")}`);
    openCart();
  });
});

// Navegação ativa acompanha a seção visível.
const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".main-nav .nav-link[href]")];
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
  });
}, { rootMargin: "-35% 0px -55%", threshold: 0 });
sections.forEach((section) => sectionObserver.observe(section));
navLinks.forEach((link) => link.addEventListener("click", () => { link.classList.add("active"); mainNav.classList.remove("open"); menuToggle.setAttribute("aria-expanded", "false"); }));

// Modal e troca real de idioma.
const languageModal = document.getElementById("language-modal");
const languageToggle = document.getElementById("language-toggle");
applyTranslations();
if (localStorage.getItem("hotel-oblivio-language")) languageModal.hidden = true;
else document.body.classList.add("locked");

function openLanguageModal() {
  languageModal.hidden = false;
  document.body.classList.add("locked");
}

languageToggle.addEventListener("click", (event) => {
  event.stopPropagation();
  const dropdown = document.getElementById("language-dropdown");
  const willOpen = dropdown.hidden;
  dropdown.hidden = !willOpen;
  languageToggle.setAttribute("aria-expanded", String(willOpen));
});

document.querySelectorAll("#language-dropdown button").forEach((button) => {
  button.addEventListener("click", () => {
    const languageNames = { "pt-BR": "Português (Brasil)", "en": "English", "es": "Español" };
    currentLanguage = button.dataset.lang;
    localStorage.setItem("hotel-oblivio-language", currentLanguage);
    applyTranslations();
    cart.render();
    checkoutTotal.textContent = formatMoney(cart.getTotal());
    document.getElementById("language-dropdown").hidden = true;
    languageToggle.setAttribute("aria-expanded", "false");
    showToast(`${t("languageSelected")} ${languageNames[currentLanguage]}`);
  });
});

document.addEventListener("click", () => {
  const dropdown = document.getElementById("language-dropdown");
  dropdown.hidden = true;
  languageToggle.setAttribute("aria-expanded", "false");
});

document.querySelectorAll(".language-options button").forEach((button) => button.addEventListener("click", () => {
  const languageNames = { "pt-BR": "Português (Brasil)", "en": "English", "es": "Español" };
  currentLanguage = button.dataset.lang;
  localStorage.setItem("hotel-oblivio-language", currentLanguage);
  applyTranslations();
  cart.render();
  checkoutTotal.textContent = formatMoney(cart.getTotal());
  languageModal.hidden = true;
  document.body.classList.remove("locked");
  showToast(`${t("languageSelected")} ${languageNames[currentLanguage]}`);
}));


document.getElementById("contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  event.currentTarget.reset();
  document.getElementById("contact-status").textContent = t("contactSuccess");
});

const checkoutModal = document.getElementById("checkout-modal");
const checkoutClose = document.getElementById("checkout-close");
const checkoutForm = document.getElementById("checkout-form");
const checkoutError = document.getElementById("checkout-error");
const checkoutTotal = document.getElementById("checkout-total");
let selectedPaymentMethod = "card";

function formatMoney(value) {
  const locale = currentLanguage === "en" ? "en-US" : currentLanguage === "es" ? "es-ES" : "pt-BR";
  return new Intl.NumberFormat(locale, { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(value);
}

function openCheckout() {
  if (!cart.list().length) return;
  selectedPaymentMethod = "card";
  setPaymentMethod("card");
  checkoutTotal.textContent = formatMoney(cart.getTotal());
  checkoutError.textContent = "";
  checkoutModal.hidden = false;
  document.body.classList.add("locked");
  closeCart();
  checkoutClose.focus();
}

function closeCheckout() {
  checkoutModal.hidden = true;
  document.body.classList.remove("locked");
  cartToggle.focus();
}

function setPaymentMethod(method) {
  selectedPaymentMethod = method;
  document.querySelectorAll(".payment-method").forEach((button) => {
    const active = button.dataset.method === method;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  document.getElementById("card-panel").hidden = method !== "card";
  document.getElementById("pix-panel").hidden = method !== "pix";
  document.getElementById("boleto-panel").hidden = method !== "boleto";
  checkoutError.textContent = "";

  checkoutForm.querySelectorAll("#card-panel input, #card-panel select").forEach((field) => {
    field.required = method === "card";
    field.disabled = method !== "card";
  });
  checkoutForm.querySelectorAll("#boleto-panel input").forEach((field) => {
    field.disabled = method !== "boleto";
  });
}

document.getElementById("checkout-button").addEventListener("click", openCheckout);
checkoutClose.addEventListener("click", closeCheckout);
checkoutModal.addEventListener("click", (event) => {
  if (event.target === checkoutModal) closeCheckout();
});

document.querySelectorAll(".payment-method").forEach((button) => {
  button.addEventListener("click", () => setPaymentMethod(button.dataset.method));
});

const cpfDigits = (value) => value.replace(/\D/g, "");
function onlyDigits(value) {
  return String(value).replace(/\D/g, "");
}

checkoutForm.querySelectorAll("input[inputmode=numeric]").forEach((input) => {
  input.addEventListener("input", () => {
    if (input.name === "cardNumber") input.value = input.value.replace(/\D/g, "").replace(/(.{4})/g, "$1 ").trim().slice(0, 19);
    if (input.name === "cardCvv") input.value = onlyDigits(input.value).slice(0, 4);
  });
});

checkoutForm.elements.cardExpiry.addEventListener("input", (event) => {
  const digits = onlyDigits(event.target.value).slice(0, 4);
  event.target.value = digits.length > 2 ? `${digits.slice(0, 2)}/${digits.slice(2)}` : digits;
});

async function copyText(text, statusElement) {
  try {
    await navigator.clipboard.writeText(text);
    statusElement.textContent = t("copied");
  } catch {
    statusElement.textContent = t("copyManually");
  }
}

document.getElementById("copy-pix-key").addEventListener("click", () => {
  copyText(document.getElementById("pix-key").value, document.getElementById("pix-copy-status"));
});

document.getElementById("copy-boleto-code").addEventListener("click", () => {
  copyText(document.querySelector("#boleto-code strong").textContent, document.getElementById("checkout-error"));
});

checkoutForm.addEventListener("submit", (event) => {
  event.preventDefault();
  checkoutError.textContent = "";

  if (selectedPaymentMethod === "card") {
    const cardNumber = onlyDigits(checkoutForm.elements.cardNumber.value);
    const cvv = onlyDigits(checkoutForm.elements.cardCvv.value);
    const expiryMatch = checkoutForm.elements.cardExpiry.value.match(/^\d{2}\/\d{2}$/);

    if (!checkoutForm.elements.cardName.value.trim() || cpfDigits(checkoutForm.elements.holderCpf.value).length !== 11) {
      checkoutError.textContent = t("invalidCardName");
      return;
    }
    if (cardNumber.length < 15 || !expiryMatch || cvv.length < 3) {
      checkoutError.textContent = t("invalidCard");
      return;
    }
  }

  if (selectedPaymentMethod === "boleto") {
    const boletoName = checkoutForm.elements.boletoName.value.trim();
    const boletoCpf = cpfDigits(checkoutForm.elements.boletoCpf.value);
    const boletoEmail = checkoutForm.elements.boletoEmail.value.trim();
    if (!boletoName || boletoCpf.length !== 11 || !/^\S+@\S+\.\S+$/.test(boletoEmail)) {
      checkoutError.textContent = t("invalidBoleto");
      return;
    }
    const code = `${Date.now()}${String(cart.getTotal()).padStart(12, "0")}`;
    const boletoBox = document.getElementById("boleto-code");
    boletoBox.hidden = false;
    boletoBox.querySelector("strong").textContent = code;
    checkoutError.textContent = t("boletoGenerated");
    return;
  }

  showToast(selectedPaymentMethod === "pix"
    ? t("pixConfirmed")
    : t("cardConfirmed"));
  cart.clear();
  closeCheckout();
  checkoutForm.reset();
  setPaymentMethod("card");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (!languageModal.hidden) {
      languageModal.hidden = true;
      document.body.classList.remove("locked");
    } else if (!checkoutModal.hidden) {
      closeCheckout();
    } else if (cartElement.classList.contains("open")) {
      closeCart();
      cartToggle.focus();
    }
  }
});
