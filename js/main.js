"use strict";

const menuAdd = document.querySelector(".js_menuAdd");

const CollapsedForm = document.querySelector(".js-new-form");

const kittenData = document.querySelector(".js-list");

const addButton = document.querySelector(".js-addButton");
//Crear un filtro de busqueda ((RENDERIZAR CON LO QUE YA SE!!))
const inputSearchDesc = document.querySelector(".js_in_search_desc");

const kittenData_1 = {
  image: "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg",
  name: "Anastacio".toUpperCase,
  desc: "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!",
  race: "British Shorthair",
};
const kittenData_2 = {
  name: "Fiona".toUpperCase,
  desc: "Muy pegajosa",
  race: "Siamés",
  image:
    "https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg",
};
const kittenData_3 = {
  name: "Cielo".toUpperCase,
  desc: "Le encanta comer",
  race: "Siamés",
  image:
    "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg",
};

const kittenDataList = [kittenData_1, kittenData_2, kittenData_3];

// Crear una función que genere un nuevo gatito

function renderKitten() {
  let html = `<li class="card">
   <article>
     <img
       class="card_img"
       src= ${kittenDataList}
       alt="gatito"
     />
     <h3 class="card_title">${name}</h3>
     <h4 class="card_title">${race}</h4>
     <p class="card_description">
     ${desc}
     </p>
   </article>
   </li>`;
}

function addKitten(event) {
  event.preventDefault();
  const newCat = {
    name: document.querySelector(".js-addName").value.toUpperCase(),
    img: document.querySelector(".js-addImg").value,
    desc: document.querySelector(".js-addDesc").value,
    race: document.querySelector(".js-addRace").value,
  };

  // Lo añado al array
  kittenDataList.push(newCat);

  // AQUÍ!! lo renderiza/pinta en html: CON BUCLE
for ()

  // Creo una función que me pinte todos los gatitos (todo el array nuevo)
}
addButton.addEventListener("click", addKitten);

//Objetos y arrays de gatitos -solo 3-

//Colapsar formulario
menuAdd.addEventListener("click", (event) =>
  CollapsedForm.classList.toggle("collapsed")
);
