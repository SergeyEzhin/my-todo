import React from 'react';
import { WrapperModal } from "../WrapperModal/WrapperModal";
import { useDispatch } from 'react-redux';
// import { switchAddMode } from '../../redux/actions';

export const ModalChange = () => {

  const dispatch = useDispatch();

  // function closeModal() 
  // {
  //   dispatch(switchAddMode())
  // }

  return (
    <WrapperModal>
      <div className="modal" id="modalChange">
        <div className="modal__content">
          <div className="modal__field">
            <input
              type="text"
              name="name-todo"
              placeholder="Введите текст задачи"
            />
          </div>
          <div className="modal__buttons">
            <button type="button" className="btn btn__change">
              Закрыть
            </button>
            <button type="button" className="btn btn__close">
              Сохранить
            </button>
          </div>
        </div>
      </div>
    </WrapperModal>
  );
};
