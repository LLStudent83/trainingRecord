/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import './activityItemStyle.css';

function AcnivityItem({ state, deleteActivity }) {
  const { date, way } = state;
  return (
    <li className="AcnivityItem__item">
      <div className="AcnivityItem__date">{date}</div>
      <div className="AcnivityItem__way">{way}</div>
      <div className="AcnivityItem__control">
        <button className="AcnivityItem__deleteItem" type="button" onClick={() => deleteActivity(state.id)}>
          <span className="material-icons highlight_off">
            highlight_off
          </span>
        </button>
      </div>

    </li>
  );
}

AcnivityItem.propTypes = {
  state: PropTypes.shape({
    date: PropTypes.string,
    way: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
  deleteActivity: PropTypes.func.isRequired,
};

export default AcnivityItem;
