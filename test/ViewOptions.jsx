import React from 'react';
import PropTypes from 'prop-types';

export default function ViewOptions({
  setState,
  showDoubleView,
  showFixedNumberOfWeeks,
  showNeighboringMonth,
  showWeekNumbers,
}) {
  function onShowDoubleViewChange(event) {
    const { checked } = event.target;

    setState({ showDoubleView: checked });
  }

  function onShowFixedNumberOfWeeksChange(event) {
    const { checked } = event.target;

    setState({ showFixedNumberOfWeeks: checked });
  }

  function onShowWeekNumbersChange(event) {
    const { checked } = event.target;

    setState({ showWeekNumbers: checked });
  }

  function onShowNeighboringMonthChange(event) {
    const { checked } = event.target;

    setState({ showNeighboringMonth: checked });
  }

  return (
    <fieldset id="viewoptions">
      <legend htmlFor="viewoptions">
        View options
      </legend>

      <div>
        <input
          id="showDoubleView"
          type="checkbox"
          checked={showDoubleView}
          onChange={onShowDoubleViewChange}
        />
        <label htmlFor="showDoubleView">
          Show double view
        </label>
      </div>

      <div>
        <input
          id="showFixedNumberOfWeeks"
          type="checkbox"
          checked={showFixedNumberOfWeeks}
          onChange={onShowFixedNumberOfWeeksChange}
        />
        <label htmlFor="showFixedNumberOfWeeks">
          Show fixed number of weeks
        </label>
      </div>

      <div>
        <input
          id="showNeighboringMonth"
          type="checkbox"
          checked={showNeighboringMonth || showFixedNumberOfWeeks}
          disabled={showFixedNumberOfWeeks}
          onChange={onShowNeighboringMonthChange}
        />
        <label htmlFor="showNeighboringMonth">
          {'Show neighboring month\'s days'}
        </label>
      </div>

      <div>
        <input
          id="showWeekNumbers"
          type="checkbox"
          checked={showWeekNumbers}
          onChange={onShowWeekNumbersChange}
        />
        <label htmlFor="showWeekNumbers">
          Show week numbers
        </label>
      </div>
    </fieldset>
  );
}

ViewOptions.propTypes = {
  setState: PropTypes.func.isRequired,
  showDoubleView: PropTypes.bool.isRequired,
  showFixedNumberOfWeeks: PropTypes.bool.isRequired,
  showNeighboringMonth: PropTypes.bool.isRequired,
  showWeekNumbers: PropTypes.bool.isRequired,
};
