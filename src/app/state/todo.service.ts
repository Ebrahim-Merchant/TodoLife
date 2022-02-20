import { IList, ITodo, ITodoService, VisibilityFilter } from './todo.interface';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Storage } from '@ionic/storage';

export enum STORAGE_KEY {
  TODO_LIST = 'todoList',
  LIST_ITEMS = 'listItems',
  LIST_TODO_MAP = 'listTodoMap',
  FILTER = 'filter',
  LIST_FILTER = 'listFilter',
}

export type FILTER = '';
@Injectable({ providedIn: 'root' })
export class TodoService implements ITodoService {
  todoList$ = new Subject<ITodo[]>();
  lists$ = new Subject<IList[]>();
  listItem$ = new Subject<IList>();
  filter$ = new Subject<VisibilityFilter>();
  listFilter$ = new Subject<VisibilityFilter>();

  constructor(private storage: Storage) {}

  getTodoList(listId?: string): Observable<ITodo[]> {
    this.storage.get(STORAGE_KEY.TODO_LIST).then((todoList) => {
      if (!todoList) {
        return;
      }

      if (listId) {
        const filteredList = (todoList as ITodo[]).filter(
          (todoItem) => todoItem.listId === listId
        );
        this.todoList$.next(filteredList);
        return;
      }

      this.todoList$.next(todoList);
    });
    return this.todoList$.asObservable();
  }

  updateTodoItem(todoItem: ITodo): void {
    this.storage.get(STORAGE_KEY.TODO_LIST).then(async (todoList) => {
      if (!todoList) {
        console.error(`DB hasn't been initialized please add item first`);
        return;
      }

      const itemIndex = todoList.findIndex(
        (localTodoItem) => localTodoItem.id === todoItem.id
      );

      if (itemIndex < 0) {
        console.error(`Cannot todoItem to  with ${todoItem.id}`);
        return;
      }

      if (todoItem.listId) {
        const lists: IList[] = await this.storage.get(STORAGE_KEY.LIST_ITEMS);
        const listIndex: number = lists.findIndex(
          (listI) => listI.id === todoItem.listId
        );
        const { completed } = lists[listIndex];

        const shouldAdd =
          todoList[itemIndex].status !== todoItem.status && todoItem.status;
        const shouldSubtract =
          todoList[itemIndex].status !== todoItem.status && !todoItem.status;
        lists[listIndex] = {
          ...lists[listIndex],
          completed: shouldAdd
            ? completed + 1
            : shouldSubtract
            ? completed - 1
            : completed,
        };
        this.storage.set(STORAGE_KEY.LIST_ITEMS, lists);
        this.lists$.next(lists);
      }

      todoList[itemIndex] = todoItem;
      this.storage.set(STORAGE_KEY.TODO_LIST, todoList);
      this.todoList$.next(todoList);
    });
  }

  addTodoItem(todoItem: ITodo): void {
    this.storage.get(STORAGE_KEY.TODO_LIST).then(async (todoList: ITodo[]) => {
      if (todoItem.listId) {
        const lists: IList[] = await this.storage.get(STORAGE_KEY.LIST_ITEMS);
        const listIndex: number = lists.findIndex(
          (listI) => listI.id === todoItem.listId
        );
        const { count } = lists[listIndex];
        lists[listIndex] = {
          ...lists[listIndex],
          count: count + 1,
        };
        this.storage.set(STORAGE_KEY.LIST_ITEMS, lists);
        this.lists$.next(lists);
      }

      if (!todoList) {
        console.info(`Initialized DB since it doesn't exist`);
        this.storage.set(STORAGE_KEY.TODO_LIST, [todoItem]);
        this.todoList$.next([todoItem]);
        return;
      }

      this.storage.set(STORAGE_KEY.TODO_LIST, [...todoList, todoItem]);
      this.todoList$.next([...todoList, todoItem]);
    });
  }

  removeTodoItem(todoItem: ITodo): void {
    this.storage.get(STORAGE_KEY.TODO_LIST).then(async (todoList) => {
      if (!todoList) {
        console.warn(`Nothing exists to be removed. Please add a item first`);
        return;
      }

      if (todoItem.listId) {
        const lists: IList[] = await this.storage.get(STORAGE_KEY.LIST_ITEMS);
        const listIndex: number = lists.findIndex(
          (listI) => listI.id === todoItem.listId
        );

        const { count, completed } = lists[listIndex];
        lists[listIndex] = {
          ...lists[listIndex],
          count: count - 1,
          completed: todoItem.status ? completed - 1 : completed,
        };
        this.storage.set(STORAGE_KEY.LIST_ITEMS, lists);
        this.lists$.next(lists);
      }

      const filtered = todoList.filter(
        (localTodoItem) => localTodoItem.id !== todoItem.id
      );

      this.storage.set(STORAGE_KEY.TODO_LIST, filtered);
      this.todoList$.next(filtered);
    });
  }

  getListItem(listId: string): Observable<IList> {
    this.storage.get(STORAGE_KEY.LIST_ITEMS).then((listItems) => {
      if (!listItems) {
        return;
      }

      if (listId) {
        const foundItem = (listItems as IList[]).find(
          (listItem) => listItem.id === listId
        );
        if (foundItem) {
          this.listItem$.next(foundItem);
        }
        return;
      }
    });
    return this.listItem$.asObservable();
  }

  getListItems(): Observable<IList[]> {
    this.storage.get(STORAGE_KEY.LIST_ITEMS).then((listItems) => {
      if (!listItems) {
        return;
      }
      this.lists$.next(listItems);
    });
    return this.lists$.asObservable();
  }

  updateListItem(listItem: IList): void {
    this.storage.get(STORAGE_KEY.LIST_ITEMS).then((listItems) => {
      if (!listItems) {
        console.error(`DB hasn't been initialized please add item first`);
        return;
      }

      const itemIndex = listItems.findIndex(
        (localListItem) => localListItem.id === listItem.id
      );

      if (itemIndex < 0) {
        console.error(`Cannot todoItem to  with ${listItem.id}`);
      }

      listItems[itemIndex] = listItem;
      this.storage.set(STORAGE_KEY.LIST_ITEMS, listItems);
      this.lists$.next(listItems);
    });
  }

  addListItem(listItem: IList): void {
    this.storage.get(STORAGE_KEY.LIST_ITEMS).then(async (listItems) => {
      if (!listItems) {
        console.info(`Initialized DB since it doesn't exist`);
        this.storage.set(STORAGE_KEY.LIST_ITEMS, [listItem]);
        this.lists$.next([listItem]);
        return;
      }

      this.storage.set(STORAGE_KEY.LIST_ITEMS, [...listItems, listItem]);
      this.lists$.next([...listItems, listItem]);
    });
  }

  removeListItem(listItem: IList): void {
    this.storage.get(STORAGE_KEY.LIST_ITEMS).then((listItems) => {
      if (!listItems) {
        console.warn(`Nothing exists to be removed. Please add a item first`);
        return;
      }
      const updateListItems = listItems.filter(
        (listI) => listI.id !== listItem.id
      );
      this.storage.set(STORAGE_KEY.LIST_ITEMS, updateListItems);
      this.lists$.next(updateListItems);
    });
  }

  getFilter() {
    this.storage
      .get(STORAGE_KEY.FILTER)
      .then((filter: VisibilityFilter | undefined) => {
        if (!filter) {
          this.storage.set(STORAGE_KEY.FILTER, VisibilityFilter.ALL);
          this.filter$.next(VisibilityFilter.ALL);
          return;
        }
        this.filter$.next(filter);
      });
    return this.filter$.asObservable();
  }

  updateFilter(filter: VisibilityFilter) {
    this.storage.set(STORAGE_KEY.FILTER, filter);
    this.filter$.next(filter);
  }

  getListFilter() {
    this.storage
      .get(STORAGE_KEY.LIST_FILTER)
      .then((filter: VisibilityFilter | undefined) => {
        if (!filter) {
          this.storage.set(STORAGE_KEY.LIST_FILTER, VisibilityFilter.ALL);
          this.listFilter$.next(VisibilityFilter.ALL);
          return;
        }
        this.listFilter$.next(filter);
      });
    return this.listFilter$.asObservable();
  }

  updateListFilter(filter: VisibilityFilter) {
    this.storage.set(STORAGE_KEY.LIST_FILTER, filter);
    this.listFilter$.next(filter);
  }
}
