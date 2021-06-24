// import './sass/main.scss';
// import getRefs from './js/getRefs';
// import Countries from './js/fetchCountries';

// const debounce = require('lodash.debounce');

// // countries
// import countries from './js/countries'

// // refs
// const refs = getRefs();

// // lisiner
// refs.input.addEventListener('input', debounce(onFilterChange, 500));


// function createListItemsMarkup(items) {
//   return items.map(item => `<li>${item}</li>`).join('');
// }

// function onFilterChange(evt) {
//   const searchQuery = evt.target.value.toLowerCase();


//   const filteredItems = countries.filter(t =>
//     t.toLowerCase().includes(searchQuery),
//   );

//   const listItemsMarkup = createListItemsMarkup(filteredItems);
//   populateList(listItemsMarkup);


//   if (searchQuery === '') {
//     refs.list.innerHTML = '';
//   }
// }

// function populateList(markup) {
//   refs.list.innerHTML = markup;
// }

// ================

fetch('https://restcountries.eu/rest/v2/name/ukr')
  .then(response => (response.json())
    .then(console.log())
    ,
  );