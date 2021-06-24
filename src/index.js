import './sass/main.scss';
import getRefs from './js/getRefs';

const debounce = require('lodash.debounce');

// countries
import countries from './js/countries'

// refs
const refs = getRefs();

// lisiner
refs.input.addEventListener('input', debounce(onFilterChange, 500));


function createListItemsMarkup(items) {
  return items.map(item => `<li>${item}</li>`).join('');
}

function onFilterChange(evt) {
  const filter = evt.target.value.toLowerCase();


  const filteredItems = countries.filter(t =>
    t.toLowerCase().includes(filter),
  );

  const listItemsMarkup = createListItemsMarkup(filteredItems);
  populateList(listItemsMarkup);


  if (filter === '') {
    refs.list.innerHTML = '';
  }
}

function populateList(markup) {
  refs.list.innerHTML = markup;
}
