import {SAVE_DATA, SWITCH_ADD_MODE, ADD_TODO} from './types';

export const saveData = () => {
    return dispatch => {
        let listTodo = localStorage.getItem('list-todo');

        if(listTodo) {
            listTodo = JSON.parse(listTodo);

            dispatch({
                type: SAVE_DATA,
                payload: listTodo
            });
        }
    }
}

export const switchAddMode = () => {
    return {type: SWITCH_ADD_MODE}
}

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}