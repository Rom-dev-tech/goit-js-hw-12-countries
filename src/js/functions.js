import countryCardTpl from '../templates/country-card.hbs';
import countriesList from '../templates/countries-list.hbs';
import getRefs from '../js/getRefs';

// PNotify
import { alert, defaultModules } from '../../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
import '../../node_modules/@pnotify/core/dist/BrightTheme.css';
import { info } from '../../node_modules/@pnotify/core';
import '../../node_modules/@pnotify/core/dist/PNotify.css';
import '../../node_modules/@pnotify/core/dist/BrightTheme.css';
import * as Confirm from '../../node_modules/@pnotify/confirm';
import '../../node_modules/@pnotify/confirm/dist/PNotifyConfirm.css';
defaultModules.set(PNotifyMobile, {});

// refs
const refs = getRefs();

// functions
function createsCountriesMarkup(counries) {
  const arrayLenght = counries.length;
  const OneCountryMarkup = counries.map(countryCardTpl).join('');
  const countryListMarkup = counries.map(countriesList).join('');

  if (arrayLenght === 1) {
    renderMarkup(OneCountryMarkup);

    info({
      title: 'Congratulations ',
      text: 'The requested country was found',
      modules: new Map([
        [
          Confirm,
          {
            confirm: true,
            buttons: [
              {
                text: 'Ok',
                primary: true,
                click: notice => {
                  notice.close();
                },
              },
            ],
          },
        ],
      ]),
    });
  }

  if (arrayLenght > 2 && arrayLenght < 10) {
    renderMarkup(countryListMarkup);

    alert({
      text: 'Please enter information more specifically',
    });
  }

  if (arrayLenght > 10) {
    renderMarkup('');

    alert({
      text: 'Many countries have been found. Please be more specific',
    });
  }
}

function onFetchError(error) {
  console.log(error);
  alert({
    text: 'Country not found. Try again..',
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