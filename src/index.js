import './sass/main.scss';
import getRefs from './js/getRefs';
import API from './js/fetchCountries';
import { createsCountriesMarkup } from './js/functions';
import { onFetchError } from './js/functions';
import { clearMarkup } from './js/functions';

const debounce = require('lodash.debounce');

const refs = getRefs();

const onInputSearch = evt => {
  const searchQuery = evt.target.value.toLowerCase();

  API.fetchCountries(searchQuery).then(createsCountriesMarkup).catch(onFetchError);

  clearMarkup(evt);
};

refs.input.addEventListener('input', debounce(onInputSearch, 500));
