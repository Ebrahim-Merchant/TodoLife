import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface ITodo {
    id: number;
    taskTitle: string;
    extra: any;
    listId: number;
    status: boolean;
    dueDate: string;
    listName: string;
}

export interface IList {
    id: number;
    listName: string;
    count: number;
    finished: number;
    pending: number;
  }


@Injectable({providedIn: 'root'})
export class AppService {
    constructor() { }

    list: IList[] = [
        {
            id: 1,
            listName: 'Grocery',
            count: 5,
            finished: 2,
            pending: 3
        },
        {
            id: 2,
            listName: 'Personal',
            count: 24,
            finished: 10,
            pending: 14
        },
        {
            id: 3,
            listName: 'Work',
            count: 24,
            finished: 10,
            pending: 14
        }
    ];

    todo: ITodo[] = [
        {
            id: 1,
            taskTitle: 'Send Email',
            extra: {},
            listId: 2,
            listName: 'Personal',
            status: false,
            dueDate: null
        },
        {
            id: 2,
            taskTitle: 'Buy milk',
            extra: {},
            listId: 1,
            status: false,
            listName: 'Grocery',
            dueDate: '09/10/2020'
        }
    ];

    todoListwithId =  {
        list: {
            id: 2,
            listName: 'LIST',
            count: 5,
            finished: 2,
            pending: 3
        },
        todo: [
            {
                id: 1,
                taskTitle: 'Send Email',
                extra: {},
                listId: 2,
                status: false,
                dueDate: null
            },
            {
                id: 2,
                taskTitle: 'Buy milk',
                extra: {},
                listId: 1,
                status: false,
                dueDate: '09/10/2020'
            }
        ]
    };

    getTodo(listId?: number): Observable<ITodo[] | any> {
        if (listId) {
            return of(this.todoListwithId);
        }
        return of(this.todo);
    }

    getList(): Observable<IList[]> {
        return of(this.list);
    }

}
/*
endpoint: needed /lists
METHOD: GET
example: lists: [
    {
        id: 1,
        listName: Grocery,
        count: 5,
        finished: 2,
        pending: 3
    },
    {
        id: 2,
        listName: Personal,
        count: 24,
        finished: 10,
        pending: 14
    }
]

endpoint: needed /todo,
METHOD: GET
example: todo: [
    {
        id: 1;
        taskTitle: "Send Email";
        extra: {};
        listId: 2;
        status: false;
        dueDate: null;
    },
    {
        id: 2;
        taskTitle: "Buy milk";
        extra: {};
        listId: 1;
        status: false;
        dueDate: "09/10/2020"
    }
]

endpoint: needed /todo/:listId:
METHOD: GET,
example: {
    list: {
        id: 2,
        name: "Grocery"
    }
    todo: [
        {
            id: 1;
            taskTitle: "Send Email";
            extra: {};
            listId: 2;
            status: false;
            dueDate: null;
        },
        {
            id: 2;
            taskTitle: "Buy milk";
            extra: {};
            listId: 1;
            status: false;
            dueDate: "09/10/2020"
        }
    ]
}

endpoint: needed /todo/
METHOD: POST,
example: {
    todoItem: {
        taskTitle: "Buy bread";
        extra: {};
        listId: 2;
        status: false;
        dueDate: "09/10/2020"
    }
}

endpoint: needed /todo/
METHOD: PUT,
example: {
    todoItem: {
        id: 2;
        status: true;
    }
}

endpoint: needed /todo/:todoId
METHOD: DELETE
*/
