import React, { useState } from "react";
import { WrapperModal } from "../WrapperModal/WrapperModal";
import { useDispatch } from "react-redux";
import { switchAddMode, addTodo } from "../../redux/actions";

export const ModalAdd = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  function closeModal() {
    dispatch(switchAddMode());
  }

  function addNewTodo() {
    if (todo.trim()) {
      console.log(todo);
      dispatch(addTodo(todo));
      dispatch(switchAddMode());
    }
  }

  return (
    <WrapperModal>
      <div className="modal" id="modalAdd">
        <div className="modal__content">
          <div className="modal__field">
            <textarea
              name="name-todo"
              id="name-todo"
              placeholder="Введите текст задачи"
              onChange={(event) => setTodo(event.target.value)}
            ></textarea>
          </div>
          <div className="modal__buttons">
            <button
              type="button"
              className="btn btn__close"
              onClick={closeModal}
            >
              Закрыть
            </button>
            <button
              type="button"
              className="btn btn__change"
              onClick={addNewTodo}
            >
              Добавить
            </button>
          </div>
        </div>
      </div>
    </WrapperModal>
  );
};
