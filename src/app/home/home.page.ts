import { UtilService } from 'src/shared/services/util/util.service';
import { ITodo, IList } from 'src/app/state/app.service';
import { EditTaskModal } from 'src/shared/modals/edit-task/edit-task.modal';
import { getList, getTodoList, visibilityFilter } from 'src/app/state/app.selector';
import { AddListModal } from 'src/shared/modals/add-list/add-list.modal';
import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Observable, combineLatest } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { AddTaskModal } from 'src/shared/modals/add-task/add-task.modal';
import { Store } from '@ngrx/store';
import { AppTypes } from 'src/app/state/app.actions';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

  /**
   * Observable of lists added by user
   *
   * @type {Observable<IList>}
   * @memberof HomePage
   */
  list: Observable<IList>;

  /**
   * TodoList a list of todo list items
   *
   * @type {Observable<ITodo>}
   * @memberof HomePage
   */
  todoList: Observable<ITodo>;

  /**
   * UI Filters
   *
   * @type {Observable<string>}
   * @memberof HomePage
   */
  filter: Observable<string>;

  /**
   *
   *
   * @type {*}
   * @memberof HomePage
   */
  listItem: any = {};

  /**
   * Creates an instance of HomePage.
   * @param {ModalController} modalController
   * @param {Store<any>} store
   * @memberof HomePage
   */
  constructor(
    public utilsService: UtilService,
    private store: Store<any>) { }

  ngOnInit(): void {
    this.filter = this.store.select(visibilityFilter);

    this.list = this.store.select(getList).pipe(tap(lists => lists.map((listItem) => this.listItem[listItem.id] = listItem)));

    this.todoList = combineLatest(
      this.store.select(getTodoList),
      this.store.select(visibilityFilter)
    ).pipe(map(([todo, filter]) => UtilService.filterValues(todo, filter)));
  }


  onCheckChange(updatedTodoItem) {
    this.store.dispatch({ type: AppTypes.UPDATE_TODO, updatedTodoItem });
  }

  divClicked(updatedTodoItem) {
    this.store.dispatch({ type: AppTypes.UPDATE_TODO, updatedTodoItem });
  }

  segmentChanged($event) {
    this.store.dispatch({ type: AppTypes.UPDATE_FILTER, updateVisibility: $event.detail.value });
  }
}
