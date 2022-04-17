import React from 'react';
import PropTypes from 'prop-types';
import ActivityItem from '../activityItem/ActivityItem';
import './activityListStyle.css';

function ActivityList(props) { //
  const { stateActivityList, deleteActivity } = props;
  return (
    <div className="ActivityList__wrapper">
      <header className="ActivityList__header">
        <div className="ActivityList__headerTitle">Дата (ДД.ММ.ГГ)</div>
        <div className="ActivityList__headerTitle">Пройдена км</div>
        <div className="ActivityList__headerTitle">Действия</div>
      </header>
      <ul className="ActivityList__list">
        {stateActivityList.map((state) => (
          <ActivityItem
            state={state}
            key={state.id}
            deleteActivity={deleteActivity}
          />
        ))}

      </ul>

    </div>

  );
}

ActivityList.propTypes = {
  stateActivityList: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string,
    way: PropTypes.number,
    id: PropTypes.string,
  })).isRequired,
  deleteActivity: PropTypes.func.isRequired,
};

export default ActivityList;
