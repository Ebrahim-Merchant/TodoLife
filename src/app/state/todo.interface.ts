import { Observable } from 'rxjs';
export interface ITodo {
	id: string;
	taskTitle: string;
	extraDetails: string;
	listId: string;
	status: boolean;
	dueDate: string;
	listName?: string;
}

export interface IList {
	id: string;
	listName: string;
	count: number;
	completed: number;
	color: string;
}

export interface ITodoService {
  getTodoList(): Observable<ITodo>;
  updateTodoList(todoItem: ITodo): void;
  addTodoItem(todoItem: ITodo): void;
  removeTodoItem(todoItemId: string): void;
}