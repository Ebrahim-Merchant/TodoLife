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

export enum VisibilityFilter {
	COMPLETED = 'completed',
	ALL = 'all',
	PENDING = 'pending'
}


export interface ITodoService {
  getTodoList(): Observable<ITodo[]>;
  updateTodoItem(todoItem: ITodo): void;
  addTodoItem(todoItem: ITodo): void;
  removeTodoItem(todoItem: ITodo): void;
}