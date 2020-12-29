import { getTodoList, getList } from './app.selector';
import { map } from 'rxjs/operators';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable, from, Subscription } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Store } from '@ngrx/store';

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

@Injectable({ providedIn: 'root' })
export class AppService implements OnDestroy {
	private list: IList[] = [];

	sub: Subscription[] = [];
	private todo: ITodo[] = [];
	constructor(private storage: Storage, private store: Store<any>) {
		this.updateList();
		this.updateTodo();
	}

	getTodo(): Observable<ITodo[]> {
		return from(this.storage.get('todoList')).pipe(
			map((todoList: ITodo[]) => (todoList ? todoList : []))
		);
	}

	getList(): Observable<IList[]> {
		return from(this.storage.get('lists')).pipe(
			map((list) => (list ? list : []))
		);
	}

	updateTodo(todo?: ITodo[]) {
		const sub1 = this.store.select(getTodoList).subscribe((todoList) => {
			this.storage.set('todoList', todoList);
		});
		this.sub.push(sub1);
	}

	updateList(list?: IList[]) {
		const sub2 = this.store
			.select(getList)
			.subscribe((lists) => this.storage.set('lists', lists));
		this.sub.push(sub2);
	}

	ngOnDestroy(): void {
		this.sub.forEach((subs) => {
			if (!subs.closed) {
				subs.unsubscribe();
			}
		});
	}
}
