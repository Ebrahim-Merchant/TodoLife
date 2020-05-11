import { createReducer, Action } from '@ngrx/store';
import { AppTypes } from './app.actions';

const initialState = {};

export interface AppActions extends Action {
  payload: any;
}

export function appReducer(state = initialState, action: AppActions) {
  switch (action.type) {
    case AppTypes.ADD_TODO_FULFILLED:
      return Object.assign({}, state, action.payload);
    case AppTypes.UPDATE_TODO_FULFILLED:
      return Object.assign({}, state, action.payload);
    case AppTypes.DELETE_TODO_FULFILLED:
        return Object.assign({}, state, action.payload);
    case AppTypes.GET_TODO_FULFILLED:
        return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
