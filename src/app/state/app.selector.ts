import { createSelector } from '@ngrx/store';

export const selectApp = (state: any) => state;

export const getTodoItems = (listId: string) => createSelector(
    selectApp,
    (state: any) => state.app ? state.app.todo.filter(todoItem => todoItem.listId === listId) : null
  );

export const getSelectedList = (listId: string) => createSelector(
    selectApp,
    (state: any) => {
      return state.app ? state.app.lists.find(listItem => listItem.id === listId) : null; }
  );

export const getList = createSelector(
    selectApp,
    (state: any) => state.app ? state.app.lists : []
  );

export const visibilityFilter = createSelector(
    selectApp,
    (state: any) => state.app ? state.app.updateVisibility : null
  );

export const listVisibilityFilter = createSelector(
    selectApp,
    (state: any) => state.app ? state.app.updateListVisibility : null
  );

export const getTodoList = createSelector(
  selectApp,
  (state: any) => state.app ? state.app.todo : []
);
