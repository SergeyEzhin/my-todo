import {
  SWITCH_ADD_MODE,
  ADD_TODO,
  SWITCH_CHANGE_MODE,
  REMOVE_TODO,
  TURN_CHANGE_MODAL,
  ADD_VARIABLE_TODO,
  CHANGE_TODO,
} from "./types";

export const switchAddMode = () => {
  return { type: SWITCH_ADD_MODE };
};

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const switchChangeMode = () => {
  return { type: SWITCH_CHANGE_MODE };
};

export const removeTodo = (todos) => {
  return {
    type: REMOVE_TODO,
    payload: todos,
  };
};

export const turnChangeModal = () => {
  return { type: TURN_CHANGE_MODAL };
};

export const addVariableTodo = (id) => {
  return {
    type: ADD_VARIABLE_TODO,
    payload: id,
  };
};

export const changeTodo = (todos) => {
  return {
    type: CHANGE_TODO,
    payload: todos,
  };
};
