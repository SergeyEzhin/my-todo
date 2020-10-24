import React from 'react';
import { ChangeTodo } from '../ChangeTodo/ChangeTodo';
import {useSelector} from 'react-redux';
import './Title.scss';

export const Title = () => {

  let changeMode = useSelector(state => state.data.changeMode);

  return (
      <div className="title">
        <h1>Сегодня</h1>
        {changeMode ? <ChangeTodo /> : null}
      </div>
  )
}