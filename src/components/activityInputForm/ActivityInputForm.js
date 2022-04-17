/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import shortid from 'shortid';
import ActivityList from '../activityList/ActivityList';
import './activityInputFormStyle.css';
import addActivityToList from '../../functionHelpers/addActivityToList';

function testDate(date) {
  const rejexp = /^[0-3]{1}[1-9]{1}\.[0-1]{1}[1-9]{1}\.[2-9]{1}[0-9]{1}[2-9]{1}[2-9]{1}$/;
  return rejexp.test(date);
}

function testWay(way) {
  const rejexp = /^[0-9]{0,1}[0-9]{0,1}\.?[0-9]{0,1}$/;
  return rejexp.test(way);
}

function ActivityInputForm() {
  const [stateDate, setStateDate] = useState('');
  const [stateWay, setStateWay] = useState('');
  const [stateActivityList, setStateActivityList] = useState([]);

  const deleteActivity = (id) => {
    const newActivityList = stateActivityList.filter((activity) => !(id === activity.id));
    setStateActivityList(newActivityList);
  };

  const handlerChangeDate = ({ target }) => {
    setStateDate(target.value);
  };

  const handlerChangeWay = ({ target }) => {
    setStateWay(Number(target.value));
  };

  const createActivity = (e) => {
    e.preventDefault();
    if (!testDate(stateDate)) {
      alert('Упс! Вы ввели дату в неправильном формате. Попробуйте еще раз.');
      return;
    }
    if (!testWay(stateWay)) {
      alert('Пожалуйста введите расстояние коррктно. Правильный формат (0.5 или 65)');
      return;
    }
    const newActivity = {
      date: stateDate,
      way: stateWay,
      id: shortid.generate(),
    };
    setStateActivityList(addActivityToList(stateActivityList, newActivity));
    setStateDate('');
    setStateWay('');
  };

  return (
    <main className="continer">
      <form className="ActivityInputForm__form" onSubmit={createActivity}>
        <div className="ActivityInputForm__wrapperInput">
          <label className="ActivityInputForm__lable" htmlFor="date">Дата (ДД.ММ.ГГ)</label><br />
          <input className="ActivityInputForm__input" type="text" id="date" placeholder="01.02.2022" value={stateDate} onChange={handlerChangeDate} />
        </div>
        <div className="ActivityInputForm__wrapperInput">
          <label className="ActivityInputForm__lable" htmlFor="way">Пройдено км</label><br />
          <input className="ActivityInputForm__input" type="text" placeholder="max 99 км" id="way" value={stateWay} onChange={handlerChangeWay} />
        </div>
        <div className="ActivityInputForm__wrapperInput">
          <button className="ActivityInputForm__button" type="submit">OK</button>
        </div>
      </form>
      <ActivityList stateActivityList={stateActivityList} deleteActivity={deleteActivity} />
    </main>

  );
}

export default ActivityInputForm;
