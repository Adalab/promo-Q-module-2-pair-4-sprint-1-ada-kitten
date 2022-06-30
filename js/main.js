'use strict'

const menuAdd = document.querySelector ('.js_menuAdd');

const kittenImage1 = 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg';

const kittenImage2 = 'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg';

const kittenImage3 = 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg';

const name1 = 'Anastacio';

const kittenName1 = name1.toUpperCase();


const name2 = 'Fiona';

const kittenName2 = name2.toUpperCase();

const name3 = 'Cielo';


const kittenName3 = name3.toUpperCase();

const CollapsedForm = document.querySelector('.js-new-form');

const kittenDesc1 =
  'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';

  const kittenDesc2 =
  'b';

  const kittenDesc3 =
  'c';

const kittenRace1 = 'British Shorthair';

const kittenRace2 = 'Raza 2';

const kittenRace3 = 'Raza 3';

let KittenData = document.querySelector('.js-list');

const handleClick = () => CollapsedForm.classList.toggle('collapsed');

menuAdd.addEventListener('click', handleClick);

function CardCat(kittenImage, kittenName, kittenRace, kittenDesc) {
  let htmlCard = `<li class="card js_cat1">`;
  htmlCard += `<article>`;
  htmlCard += `<img class="card_img" src=${kittenImage} alt="gatito" />`;
  htmlCard += `<h3 class="card_title">${kittenName}</h3>`;
  htmlCard += `<h4 class="card_race">${kittenRace}</h4>`;
  htmlCard += `<p class="card_description"> ${kittenDesc} </p>`;
  htmlCard += `</article>`;
  htmlCard += `</li>`;
  return htmlCard;
}

 KittenData.innerHTML = CardCat(kittenImage1, kittenName1, kittenRace1, kittenDesc1) + CardCat(kittenImage2, kittenName2, kittenRace2, kittenDesc2) + CardCat(kittenImage3, kittenName3, kittenRace3, kittenDesc3);

const inputSearchDesc = document.querySelector('.js_in_search_desc');