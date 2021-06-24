import './sass/main.scss';
import getRefs from './js/getRefs';
import API from './js/fetchCountries';
import countryCardTpl from './templates/country-card.hbs';
import countriesList from './templates/countries-list.hbs';

const debounce = require('lodash.debounce');

// refs
const refs = getRefs();

// lisiner
refs.input.addEventListener('input', debounce(onFilterChange, 500));

function onFilterChange(evt) {
  const searchQuery = evt.target.value.toLowerCase();

  API.fetchCountries(searchQuery).then(createsCountriesMarkup).catch(onFetchError);

  clear(evt);
}

function createsCountriesMarkup(counries) {
  const arrayLenght = counries.length;
  const OneCountryMarkup = counries.map(countryCardTpl).join('');
  const countryListMarkup = counries.map(countriesList).join('');

  if (arrayLenght === 1) {
    renderMarkup(OneCountryMarkup);
  }

  if (arrayLenght > 2 && arrayLenght < 10) {
    renderMarkup(countryListMarkup);
  }

  if (arrayLenght > 10) {
    renderMarkup('');
  }
}

function onFetchError(error) {
  return console.log(error);
}

function clear(evt) {
  if (evt.target.value === '') {
    renderMarkup('');
  }
}

function renderMarkup(markup) {
  refs.list.innerHTML = `${markup}`;
}
