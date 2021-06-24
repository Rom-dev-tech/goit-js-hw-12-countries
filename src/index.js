import './sass/main.scss';
import getRefs from './js/getRefs';
import API from './js/fetchCountries';
import fn from './js/functions';

// library 'lodash'
const debounce = require('lodash.debounce');

// refs
const refs = getRefs();

// lisiner
refs.input.addEventListener('input', debounce(onInputSearch, 500));

// searchQuery
function onInputSearch(evt) {
  const searchQuery = evt.target.value.toLowerCase();

  API.fetchCountries(searchQuery).then(fn.createsCountriesMarkup).catch(fn.onFetchError);

  fn.clearMarkup(evt);
}
