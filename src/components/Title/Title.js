import React from "react";
import { ChangeTodo } from "../ChangeTodo/ChangeTodo";
import { useSelector } from "react-redux";
import "./Title.scss";

export const Title = () => {
  let todos = useSelector((state) => state.data.data);

  return (
    <div className="title">
      <h1>Сегодня</h1>
      {todos.length ? <ChangeTodo /> : null}
    </div>
  );
};
