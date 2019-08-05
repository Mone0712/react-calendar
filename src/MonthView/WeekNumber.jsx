import React from 'react';
import PropTypes from 'prop-types';
import checked from '../assets/baseline_radio_button_checked_black_18dp.png';
import unchecked from '../assets/baseline_radio_button_unchecked_black_18dp.png';

export default function WeekNumber({
  date,
  onClickWeekNumber,
  weekNumber,
  allSelects,
}) {
  const allSelect = allSelects.some(item => item.getTime() === date.getTime());
  return (
    onClickWeekNumber
      ? (
        <button
          className="react-calendar__tile"
          onClick={() => onClickWeekNumber(weekNumber, date)}
          style={{ flexGrow: 1 }}
          type="button"
        >
          {allSelect
            ? <img style={{ width: '1em/0.75', height: '1em/0.75' }} src={checked} alt="" />
            : <img style={{ width: '1em/0.75', height: '1em/0.75' }} src={unchecked} alt="" />}
        </button>
      )
      : (
        <div
          className="react-calendar__tile"
          style={{ flexGrow: 1 }}
        >
          <span>
            {weekNumber}
          </span>
        </div>
      )
  );
}

WeekNumber.propTypes = {
  allSelects: PropTypes.arrayOf(Date),
  date: PropTypes.instanceOf(Date).isRequired,
  onClickWeekNumber: PropTypes.func,
  weekNumber: PropTypes.number.isRequired,
};
