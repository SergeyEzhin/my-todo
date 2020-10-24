import React from "react";
import "./AddTodo.scss";
import { useDispatch } from 'react-redux';
import { switchAddMode } from '../../redux/actions';
import iconPlus from "../../images/icon_plus.svg";


export const AddTodo = () => {

  const dispatch = useDispatch();

  function clickHandler() {
    dispatch(switchAddMode())
  }

  return (
    <button
      type="button"
      id="addTodo"
      className="add-todo"
      onClick={clickHandler}
    >
      <img src={iconPlus} alt="" />
    </button>
  );
};
