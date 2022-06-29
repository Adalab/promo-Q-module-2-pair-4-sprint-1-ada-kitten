'use strict'

const CollapsedForm = document.querySelector('.js-new-form');

const kittenImage1 = 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg';

const kittenImage2 = 'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg';

const kittenImage3 = 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg';

const name1 = 'Anastacio';

const kittenName1 = name1.toUpperCase();


const name2 = 'Fiona';

const kittenName2 = name2.toUpperCase();

const name3 = 'Cielo';


const kittenName3 = name3.toUpperCase();

const kittenDesc1 =
  'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';

  const kittenDesc2 =
  'B';

  const kittenDesc3 =
  'C';

const kittenRace1 = 'British Shorthair';

const kittenRace2 = 'Raza 2';

const kittenRace3 = 'Raza 3';



// CollapsedForm.classList.remove('collapsed');

let KittenData = document.querySelector('.js-list');

const Cat1  = `<li class="card">
<article>
  <img
    class="card_img"
    src=${kittenImage1}
    alt="gatito"
  />
  <h3 class="card_title">${kittenName1}</h3>
  <h4 class="card_race">${kittenRace1}</h4>
  <p class="card_description">
${kittenDesc1}
  </p>
</article>
</li>`;


const Cat2 = `<li class="card">
<img
  class="card_img"
  src="${kittenImage2}"
  alt="gatito"
/>
<h3 class="card_title">${kittenName2}</h3>
<h4 class="card_race">${kittenRace2}</h4>
<p class="card_description">
${kittenDesc2}
</p>
</li>`;

const Cat3 = `<li class="card">
<img
  class="card_img"
  src="${kittenImage3}"
  alt="gatito"
/>
<h3 class="card_title">${kittenName3}</h3>
<h4 class="card_race">${kittenRace3}</h4>
<p class="card_description">
${kittenDesc3}
</p>
</li>`;

KittenData.innerHTML = `${Cat1} + ${Cat2} + ${Cat3}`;

