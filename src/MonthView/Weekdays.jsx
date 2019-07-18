/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-plusplus */
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
  } = props;

  const anyDate = new Date();
  const beginOfMonth = getBeginOfMonth(anyDate);
  const year = getYear(beginOfMonth);
  const monthIndex = getMonthIndex(beginOfMonth);

  const weekdays = [];
  const beginDate = Array(8).fill(1);
  const a = getBeginOfMonth(anyDate);
  for (let index = 0; index < 7; index++) {
    index < beginOfMonth.getDay()
      ? beginDate[index] = a.setDate(beginOfMonth.getDate() + 7 + index - beginOfMonth.getDay())
      : beginDate[index] = a.setDate(beginOfMonth.getDate() + index - beginOfMonth.getDay());
  }
  beginDate[7] = beginDate[0];
  for (let weekday = 1; weekday <= 7; weekday += 1) {
    const weekdayDate = new Date(
      year, monthIndex, weekday - getDayOfWeek(beginOfMonth, calendarType),
    );

    const abbr = formatWeekday(locale, weekdayDate);

    weekdays.push(
      <button
        className="react-calendar__month-view__weekdays__weekday"
        key={weekday}
        type="button"
        onClick={
            () => onClickWeekDay(beginDate[weekday])
        }
      >
        <abbr title={abbr} aria-label={abbr}>
          {formatShortWeekday(locale, weekdayDate).replace('.', '')}
        </abbr>
      </button>,
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
  onClickWeekDay: PropTypes.func,
  onMouseLeave: PropTypes.func,
};
