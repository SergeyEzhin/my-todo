import React, { useState } from "react";
import { WrapperModal } from "../WrapperModal/WrapperModal";
import { useDispatch, useSelector } from "react-redux";
import { turnChangeModal, changeTodo } from "../../redux/actions";

export const ModalChange = () => {
  const dispatch = useDispatch();
  const todoId = useSelector((state) => state.data.variableTodoId);
  const todos = useSelector((state) => state.data.data);
  const [todo, setTodo] = useState(todos[todoId]);

  function closeModal() {
    dispatch(turnChangeModal());
  }

  function saveNewTodo() {
    if (todo.trim()) {
      todos[todoId] = todo;
      dispatch(changeTodo(todos));
      dispatch(turnChangeModal());
    }
  }

  return (
    <WrapperModal>
      <div className="modal" id="modalChange">
        <div className="modal__content">
          <div className="modal__field">
            <input
              type="text"
              name="name-todo"
              placeholder="Введите текст задачи"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
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
              onClick={saveNewTodo}
            >
              Сохранить
            </button>
          </div>
        </div>
      </div>
    </WrapperModal>
  );
};
