import React, {useState} from "react";
import { WrapperModal } from "../WrapperModal/WrapperModal";
import { useDispatch } from 'react-redux';
import { switchAddMode, addTodo } from '../../redux/actions';

export const ModalAdd = () => {

  const dispatch = useDispatch();
  const [todo, setTodo] = useState('');

  // function checkValue(e)
  // {
  //   return e.target.value
  // }

  function closeModal() {
    dispatch(switchAddMode())
  }

  function addTodo() {
    console.log(todo);
    dispatch(addTodo(todo));
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
              onChange={event => setTodo(event.target.value)}
            ></textarea>
          </div>
          <div className="modal__buttons">
            <button type="button" className="btn btn__change" onClick={closeModal}>
              Закрыть
            </button>
            <button type="button" className="btn btn__close" onClick={addTodo}>
              Добавить
            </button>
          </div>
        </div>
      </div>
    </WrapperModal>
  );
};
