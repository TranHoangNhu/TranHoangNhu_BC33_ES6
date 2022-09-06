window.onload = function () {
  renderProductSrc();
  renderVituralProd();
};
let dataGlasses = [
  {
    id: "G1",
    src: "./img/g1.jpg",
    virtualImg: "./img/v1.png",
    brand: "Armani Exchange",
    name: "Bamboo wood",
    color: "Brown",
    price: 150,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? ",
  },
  {
    id: "G2",
    src: "./img/g2.jpg",
    virtualImg: "./img/v2.png",
    brand: "Arnette",
    name: "American flag",
    color: "American flag",
    price: 150,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G3",
    src: "./img/g3.jpg",
    virtualImg: "./img/v3.png",
    brand: "Burberry",
    name: "Belt of Hippolyte",
    color: "Blue",
    price: 800,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G4",
    src: "./img/g4.jpg",
    virtualImg: "./img/v4.png",
    brand: "Coarch",
    name: "Cretan Bull",
    color: "Red",
    price: 600,
    description: "In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G5",
    src: "./img/g5.jpg",
    virtualImg: "./img/v5.png",
    brand: "D&G",
    name: "JOYRIDE",
    color: "Gold",
    price: 180,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?",
  },
  {
    id: "G6",
    src: "./img/g6.jpg",
    virtualImg: "./img/v6.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Blue, White",
    price: 320,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G7",
    src: "./img/g7.jpg",
    virtualImg: "./img/v7.png",
    brand: "Ralph",
    name: "TORTOISE",
    color: "Black, Yellow",
    price: 500,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam.",
  },
  {
    id: "G8",
    src: "./img/g8.jpg",
    virtualImg: "./img/v8.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Red, Black",
    price: 555,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim.",
  },
  {
    id: "G9",
    src: "./img/g9.jpg",
    virtualImg: "./img/v9.png",
    brand: "Coarch",
    name: "MIDNIGHT VIXEN REMIX",
    color: "Blue, Black",
    price: 333,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet.",
  },
];

function renderProductSrc() {
  let html = "";
  for (let prod of dataGlasses) {
    html += `
    <a class="col-4 py-3" href="?paramProd=${prod.id}"><img class="w-100" src=${prod.src} alt=${prod.name} /></a>
            `;
  }
  document.querySelector("#vglassesList").innerHTML = html;
}

let urlParams = new URLSearchParams(window.location.search);
let myParam = urlParams.get("paramProd");
console.log("params", myParam);

function renderVituralProd(){
  let glassByID = dataGlasses.filter((prod) => prod.id === myParam);
  console.log(glassByID);
  let htmlA = "";
  let htmlB = "";
  for (let prod of glassByID) {
    htmlA = `
    <div class="item">
        <img src=${prod.virtualImg} alt=${prod.name}>
    </div>
            `;
  }
  for (let prod of glassByID) {
    htmlB = `
    <div class="row">
        <div class="item">
            <h3>${prod.name} - ${prod.brand} (${prod.color})</h3>
            <a href="#">${prod.price}$</a>
            <span>Stocking</span>
            <p>${prod.description}</p>
        </div>
    </div>
    `;
  }
  console.log(htmlA);
  console.log(htmlB);
  document.getElementById("avatar").innerHTML = htmlA;
  document.getElementById("glassesInfo").innerHTML = htmlB;
  removeGlasses(true);
}