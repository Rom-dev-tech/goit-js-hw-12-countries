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

const refs = getRefs();

export const createsCountriesMarkup = counries => {
  // Подмена языка в обьект
  counries[0].languages = Object.values(counries[0].languages).join(', ');

  const arrayLenght = counries.length;
  const OneCountryMarkup = counries.map(countryCardTpl);
  const countryListMarkup = counries.map(countriesList).join('');

  renderMarkup(countryListMarkup);

  if (!arrayLenght) {
    return;
  }

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

  if (arrayLenght > 10) {
    renderMarkup('');

    alert({
      text: 'Many countries have been found. Please be more specific',
    });
  }
};

export const onFetchError = error => {
  console.log(error);
  alert({
    text: 'Country not found. Try again..',
  });
  renderMarkup('');
};

export const clearMarkup = evt => {
  if (evt.target.value === '') {
    renderMarkup('');
  }
};

const renderMarkup = markup => {
  refs.list.innerHTML = `${markup}`;
};
