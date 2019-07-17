import React from 'react';
import PropTypes from 'prop-types';

import Flex from '../Flex';

import {
  getBeginOfMonth,
  getDayOfWeek,
  getMonthIndex,
  getYear,
} from '../shared/dates';
import { formatWeekday, formatShortWeekday as defaultFormatShortWeekday } from '../shared/dateFormatter';
import { isCalendarType } from '../shared/propTypes';

export default function Weekdays(props) {
  const {
    calendarType,
    formatShortWeekday,
    locale,
    onMouseLeave,
    onClickWeekDay,
    beginDate
  } = props;

  const anyDate = new Date();
  const beginOfMonth = getBeginOfMonth(anyDate);
  const year = getYear(beginOfMonth);
  const monthIndex = getMonthIndex(beginOfMonth);

  const weekdays = [];
  let beginDate=Array(8).fill(0);
  beginDate.map((item,index) => index<beginOfMonth.getDay() ? item=beginOfMonth.setDate(beginOfMonth.getDate()+7+index-beginOfMonth.getDay()):item=beginOfMonth.setDate(beginOfMonth.getDate()+index-beginOfMonth.getDay()));
  beginDate[7]=beginDate[0];

  for (let weekday = 1; weekday <= 7; weekday += 1) {
    const weekdayDate = new Date(
      year, monthIndex, weekday - getDayOfWeek(beginOfMonth, calendarType),
    );

    const abbr = formatWeekday(locale, weekdayDate);

    weekdays.push(
      <div
        className="react-calendar__month-view__weekdays__weekday"
        key={weekday}
        onClick={() => onClickWeekDay(beginDate[weekday])}
      >
        <abbr title={abbr} aria-label={abbr}>
          {formatShortWeekday(locale, weekdayDate).replace('.', '')}
        </abbr>
      </div>,
    );
  }

  return (
    <Flex
      className="react-calendar__month-view__weekdays"
      count={7}
      onFocus={onMouseLeave}
      onMouseOver={onMouseLeave}
    >
      {weekdays}
    </Flex>
  );
}

Weekdays.defaultProps = {
  formatShortWeekday: defaultFormatShortWeekday,
};

Weekdays.propTypes = {
  calendarType: isCalendarType.isRequired,
  formatShortWeekday: PropTypes.func,
  locale: PropTypes.string,
  onMouseLeave: PropTypes.func,
  onClickWeekDay: PropTypes.func,
};
