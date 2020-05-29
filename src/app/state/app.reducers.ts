import { createReducer, Action } from '@ngrx/store';
import { AppTypes } from './app.actions';

const initialState = {
  todo: []
};

export interface AppActions extends Action {
  todo: [];
}

export function appReducer(state = initialState, action: AppActions) {
  console.log(action);
  switch (action.type) {
    case AppTypes.ADD_TODO_FULFILLED:
      return Object.assign({}, state, action.todo);
    case AppTypes.UPDATE_TODO_FULFILLED:
      return Object.assign({}, state, action.todo);
    case AppTypes.DELETE_TODO_FULFILLED:
        return Object.assign({}, state, action.todo);
    case AppTypes.GET_TODO_FULFILLED:
        return Object.assign({}, state, {todo: [...action.todo]});
    default:
      return state;
  }
}
