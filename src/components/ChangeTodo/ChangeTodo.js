import React from "react";
import "./ChangeTodo.scss";
import { useDispatch, useSelector } from "react-redux";
import { switchChangeMode } from "../../redux/actions";

export const ChangeTodo = () => {
  const dispatch = useDispatch();
  const changeMode = useSelector((state) => state.data.changeMode);

  function clickHandler(e) {
    dispatch(switchChangeMode());
  }

  return (
    <button
      type="button"
      id="changeToDo"
      className="change-todo"
      onClick={clickHandler}
    >
      {changeMode ? "Отменить" : "Править"}
    </button>
  );
};
