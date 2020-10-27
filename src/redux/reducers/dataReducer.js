import {
  SWITCH_ADD_MODE,
  ADD_TODO,
  SWITCH_CHANGE_MODE,
  REMOVE_TODO,
  TURN_CHANGE_MODAL,
  ADD_VARIABLE_TODO,
  CHANGE_TODO,
} from "../types";

const initialState = {
  data: [],
  changeMode: false,
  addMode: false,
  turnChangeModal: false,
  variableTodoId: "",
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_ADD_MODE:
      return { ...state, addMode: !state.addMode };
    case SWITCH_CHANGE_MODE:
      return { ...state, changeMode: !state.changeMode };
    case ADD_TODO:
      return { ...state, data: [...state.data, action.payload] };
    case REMOVE_TODO:
      return { ...state, data: [...action.payload] };
    case TURN_CHANGE_MODAL:
      return { ...state, turnChangeModal: !state.turnChangeModal };
    case ADD_VARIABLE_TODO:
      return { ...state, variableTodoId: action.payload };
    case CHANGE_TODO:
      return { ...state, data: [...action.payload] };
    default:
      return state;
  }
};
