import countryCardTpl from '../templates/country-card.hbs';
import countriesList from '../templates/countries-list.hbs';
import getRefs from '../js/getRefs';

const refs = getRefs();

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

function clearMarkup(evt) {
  if (evt.target.value === '') {
    renderMarkup('');
  }
}

function renderMarkup(markup) {
  refs.list.innerHTML = `${markup}`;
}

export default { createsCountriesMarkup, clearMarkup, onFetchError };
