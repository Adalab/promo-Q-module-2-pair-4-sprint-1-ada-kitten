"use strict";

const menuAdd = document.querySelector(".js_menuAdd");

const CollapsedForm = document.querySelector(".js-new-form");

const kittenData = document.querySelector(".js-list");

const addButton = document.querySelector(".js-addButton");

// const Cat1 = {
//   name : 'Anastacio',
//   desc : 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
//   image: 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg',
//   title: () => {Cat1.name.toUpperCase()}
// }

// const kittenName2 = name2.toUpperCase();

// const kittenName3 = name3.toUpperCase();

//Colapsar formulario
menuAdd.addEventListener("click", (event) =>
  CollapsedForm.classList.toggle("collapsed")
);

// Crear una función que genere un nuevo gatito

function renderKitten(event) {
  event.preventDefault();
  const newCat = {
    name: document.querySelector(".js-addName").value.toUpperCase(),
    img: document.querySelector(".js-addImg").value,
    desc: document.querySelector(".js-addDesc").value,
    race: document.querySelector(".js-addRace").value,
    renderKitten: function () {
      const html = `<li class="card">
    <article>
      <img
        class="card_img"
        src=${this.img}
        alt="gatito"
      />
      <h3 class="card_title">${this.name}</h3>
      <h4 class="card_title">${this.race}</h4>
      <p class="card_description">
      ${this.desc}
      </p>
    </article>
    </li>`;
      return html;
    },
  };
  // Lo añado al array
  kittenDataList.push(newCat);
  // lo renderiza/pinta en html
  kittenData.innerHTML += newCat.renderKitten();
}
addButton.addEventListener("click", renderKitten);
//Crear un filtro de busqueda ((ACABAR CON LO QUE YA SE))
const inputSearchDesc = document.querySelector(".js_in_search_desc");

//Objetos y arrays de gatitos

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
