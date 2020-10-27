import React from "react";
import "./RemoveTodo.scss";
import iconDelete from "../../images/icon_delete.svg";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../../redux/actions";

export const RemoveTodo = ({ id }) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.data.data);

  function clickHandler(id) {
    let newTodos = todos.filter((elem, index) => index !== id);
    console.log(newTodos);
    dispatch(removeTodo(newTodos));
  }

  return (
    <button
      type="button"
      className="remove-todo"
      onClick={() => clickHandler(id)}
    >
      <img src={iconDelete} alt="" />
    </button>
  );
};
