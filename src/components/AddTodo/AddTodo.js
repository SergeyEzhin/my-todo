import React from "react";
import "./AddTodo.scss";

export const AddTodo = () => {
  function clickHandler(e) {
    console.log(e);
  }

  return (
    <button type="button" id="addTodo" onClick={clickHandler}>
      <img src={process.env.PUBLIC_URL + "/img/icon_plus.svg"} alt="" />
    </button>
  );
};
