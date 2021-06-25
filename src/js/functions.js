import countryCardTpl from '../templates/country-card.hbs';
import countriesList from '../templates/countries-list.hbs';
import getRefs from '../js/getRefs';

import { alert, defaultModules } from '../../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';

defaultModules.set(PNotifyMobile, {});

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

    alert({
      text: 'Много стран под коитерием',
    });
  }

  if (arrayLenght > 10) {
    renderMarkup('');
    alert({
      text: 'Веддите название более коректней',
    });
  }
}

function onFetchError(error) {
  console.log(error);
  alert({
    text: 'Введите название правильно',
  });
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
