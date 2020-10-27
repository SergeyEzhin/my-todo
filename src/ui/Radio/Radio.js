import React from "react";
import "./Radio.scss";
import { useSelector, useDispatch } from "react-redux";
import { RemoveTodo } from "../../components/RemoveTodo/RemoveTodo";
import { turnChangeModal, addVariableTodo } from "../../redux/actions";

export const Radio = ({ id, text }) => {
  const changeMode = useSelector((state) => state.data.changeMode);
  const dispatch = useDispatch();

  function clickHandler(e) {
    if (changeMode) {
      dispatch(addVariableTodo(id));
      dispatch(turnChangeModal());
    }
  }

  return (
    <label className="radio" htmlFor={`radio${id}`}>
      <input
        type="radio"
        className="radio__elem"
        name="radio"
        id={`radio${id}`}
        hidden
      />
      {changeMode ? (
        <RemoveTodo id={id} />
      ) : (
        <div className="radio__wrap"></div>
      )}
      <p className="radio__text" onClick={clickHandler}>
        {text}
      </p>
    </label>
  );
};
