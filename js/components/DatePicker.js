import React from 'react';
import DayPicker from 'react-day-picker';

import '../../../node_modules/react-day-picker/lib/style.css';

const WEEKDAYS_LONG = {
  ru: [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ],
  it: [
    'Domenica',
    'Lunedì',
    'Martedì',
    'Mercoledì',
    'Giovedì',
    'Venerdì',
    'Sabato',
  ],
  cz: [
    'Pondělí',
    'Úterý',
    'Středa',
    'Čtvrtek',
    'Pátek',
    'Sobota',
    'Neděle'
  ]
};

const WEEKDAYS_SHORT = {
  ru: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  it: ['Do', 'Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa'],
  cz: ['Po', 'Út', 'St', 'Čt', 'Pá', 'So', 'Ne']
};
const MONTHS = {
  ru: [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ],
  it: [
    'Gennaio',
    'Febbraio',
    'Marzo',
    'Aprile',
    'Maggio',
    'Giugno',
    'Luglio',
    'Agosto',
    'Settembre',
    'Ottobre',
    'Novembre',
    'Dicembre',
  ],
  cz: [
    'Leden',
    'Únor',
    'Březen',
    'Duben',
    'Květen',
    'Červen',
    'Červenec',
    'Srpen',
    'Září',
    'Říjen',
    'Listopad',
    'Prosinec',
  ]
};
const FIRST_DAY_OF_WEEK = {
  ru: 1,
  it: 1,
  cz: 1
};

// Translate aria-labels
const LABELS = {
  ru: { nextMonth: 'следующий месяц', previousMonth: 'предыдущий месяц' },
  it: { nextMonth: 'Prossimo mese', previousMonth: 'Mese precedente' },
  cz: { nextMonth: 'Další měsíc', previousMonth: 'Předchozí měsíc' }
};

export default class DatePicker extends React.Component {
  state = {
    locale: 'cz',
  };

  switchLocale = e => {
    const locale = e.target.value || 'en';
    this.setState({ locale });
  };

  render() {
    const { locale } = this.state;
    return (
      <div>
        <p>
          <select value={locale} onChange={this.switchLocale}>
            <option value="cz">Česky</option>
            <option value="en">English</option>
            <option value="ru">Русский (Russian)</option>
            <option value="it">Italian</option>
          </select>
        </p>
        <DayPicker
          locale={locale}
          months={MONTHS[locale]}
          weekdaysLong={WEEKDAYS_LONG[locale]}
          weekdaysShort={WEEKDAYS_SHORT[locale]}
          firstDayOfWeek={FIRST_DAY_OF_WEEK[locale]}
          labels={LABELS[locale]}
        />
      </div>
    );
  }
}