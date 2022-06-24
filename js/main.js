'use strict'

const CollapsedForm = document.querySelector('.js-new-form');

let kittenImage = 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg';

let kittenName = 'Anastacio';

let kittenDesc =
  'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';

let kittenRace = 'British Shorthair';



// CollapsedForm.classList.remove('collapsed');

let KittenData = document.querySelector('.js-list');

const Cat1  = `<li class="card">
<article>
  <img
    class="card_img"
    src=${kittenImage}
    alt="gatito"
  />
  <h3 class="card_title">${kittenName}</h3>
  <h4 class="card_race">${kittenRace}</h4>
  <p class="card_description">
${kittenDesc}
  </p>
</article>
</li>`;


const Cat2 = `<li class="card">
<img
  class="card_img"
  src="https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg"
  alt="gatito"
/>
<h3 class="card_title">Fiona</h3>
<h4 class="card_race">British Shorthair</h4>
<p class="card_description">
  Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.
  Es una maravilla acariciarle!
</p>
</li>`;

const Cat3 = `<li class="card">
<img
  class="card_img"
  src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg"
  alt="gatito"
/>
<h3 class="card_title">Cielo</h3>
<h4 class="card_race">British Shorthair</h4>
<p class="card_description">
  Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.
  Es una maravilla acariciarle!
</p>
</li>`;

KittenData.innerHTML = `${Cat1} + ${Cat2} + ${Cat3}`;
