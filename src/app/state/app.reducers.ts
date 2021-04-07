import { Action } from '@ngrx/store';
import { AppTypes } from './app.actions';
import { IList, ITodo } from './app.service';

export interface IAppState {
  todo: Array<ITodo>,
  lists: Array<IList>,
  filter: string,
  listFilter: string
}

const initialState: IAppState = {
  todo: [],
  lists: [],
  filter: 'all',
  listFilter: 'all'
};

export interface AppActions extends Action {
  todo: [];
  lists?: [];
  newList: {};
  updatedTodoItem?: null;
  filter: string;
}

export function appReducer(state = initialState, action: AppActions) {
  switch (action.type) {
    case AppTypes.ADD_TODO_FULFILLED:
      return addTodo(state, action);
    case AppTypes.DELETE_TODO:
      return deleteTodo(state, action);
    case AppTypes.GET_LIST_FULFILLED:
      return Object.assign({}, state, { lists: action.lists });
    case AppTypes.ADD_LIST:
      return Object.assign({}, state, { lists: [...state.lists, action.newList] });
    case AppTypes.UPDATE_LIST:
        return updateListItem(state, action);
    case AppTypes.DELETE_LIST:
          return deleteListItem(state, action);
    case AppTypes.UPDATE_FILTER:
        return Object.assign({}, state, { filter: action.filter });
    case AppTypes.UPDATE_LIST_FILTER:
        return Object.assign({}, state, { listFilter: action.filter });
    case AppTypes.UPDATE_TODO:
      return updateTodo(state, action);
    case AppTypes.DELETE_TODO_FULFILLED:
      return Object.assign({}, state, action.todo);
    case AppTypes.GET_TODO_FULFILLED:
      return Object.assign({}, state, { todo: [...action.todo] });
    default:
      return state;
  }
}

function updateTodo(state, action) {
  const { todo, lists } = state;
  const updatedTodo = action.updatedTodoItem;
  const updatedTodoList = todo.map(todoItem => todoItem.id === updatedTodo.id ? updatedTodo : todoItem);
  const updatedLists = lists.map(listItem =>  updateList(listItem, updatedTodo, updatedTodoList) );
  return Object.assign({}, state, { todo: updatedTodoList, lists: updatedLists });
}

function updateList(listItem, updatedTodo, todo) {
  if (listItem.id === updatedTodo.listId) {
    let completed = 0;
    let count = 0;
    todo.forEach(todoItem => {
      if (todoItem.listId === listItem.id) {
        count++;
        if (todoItem.status) {
          completed++;
        }
      }
    });
    listItem.completed = completed;
    listItem.count = count;
  }
  return listItem;
}

function addTodoList(listItem, updatedTodo) {
  if (listItem.id === updatedTodo.listId) {
    listItem.count++;
  }
  return listItem;
}

function deleteTodoList(listItem, updatedTodo) {
  if (listItem.id === updatedTodo.listId) {
    listItem.count--;
    if (updatedTodo.status) {
      listItem.completed--;
    }
  }
  return listItem;
}

function addTodo(state, action) {
  const { todo, lists } = state;
  const addTodoItem = action.todo[0];
  const addedTodoList = [ ...todo, addTodoItem];
  const updatedLists = lists.map(listItem => addTodoList(listItem, addTodoItem));
  return Object.assign({}, state, { todo: addedTodoList, lists: updatedLists });
}

function deleteTodo(state, action) {
  const { todo, lists } = state;
  const removeTodoItem = action.todo[0];
  const updatedTodoList = todo.filter(todoItem => todoItem.id !== removeTodoItem.id);
  const updatedLists = lists.map(listItem => deleteTodoList(listItem, removeTodoItem));
  return Object.assign({}, state, { todo: updatedTodoList, lists: updatedLists });
}

function updateListItem(state, action) {
  const { lists } = state;
  const updatedList = action.newList;
  const updatedListItem = lists.map(listItem => listItem.id === updatedList.id ? updatedList : listItem);
  return Object.assign({}, state, { lists: updatedListItem });
}


function deleteListItem(state, action) {
  const { lists } = state;
  const removedList = action.newList;
  const removedListItem = lists.filter(listItem => listItem.id !== removedList.id);
  return Object.assign({}, state, { lists: removedListItem });
}
