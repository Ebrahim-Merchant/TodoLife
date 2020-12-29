import { ITodo, ITodoService } from './todo.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class TodoService implements ITodoService{

  constructor() { }

  getTodoList(): Observable<ITodo> {
    throw new Error('Method not implemented.');
  }
  updateTodoList(todoItem: ITodo): void {
    throw new Error('Method not implemented.');
  }
  addTodoItem(todoItem: ITodo): void {
    throw new Error('Method not implemented.');
  }
  removeTodoItem(todoItemId: string): void {
    throw new Error('Method not implemented.');
  }
  
}