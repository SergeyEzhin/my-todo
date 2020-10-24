import {SAVE_DATA, SWITCH_ADD_MODE, ADD_TODO} from '../types';

const initialState = {
    data: [],
    changeMode: false,
    addMode: false
};

export const dataReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case SAVE_DATA:
            return {...state, data: action.payload}
        case SWITCH_ADD_MODE:
            return {...state, addMode: !state.addMode}
        case ADD_TODO:
            return {...state, data: [...state.data, action.payload]}
        default:
            return state
    }
} 