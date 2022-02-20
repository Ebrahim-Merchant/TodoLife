import { UtilService } from "src/shared/services/util/util.service";
import { Component, OnInit } from "@angular/core";
import { map, tap } from "rxjs/operators";
import { Observable, combineLatest } from "rxjs";
import { TodoService } from "../state/todo.service";
import { IList, ITodo } from "../state/todo.interface";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  /**
   * Observable of lists added by user
   *
   * @type {Observable<IList[]>}
   * @memberof HomePage
   */
  list: Observable<IList[]>;

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
   * @memberof HomePage
   */
  constructor(
    public utilsService: UtilService,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.filter = this.todoService.getFilter();

    this.list = this.todoService
      .getListItems()
      .pipe(
        tap((lists) =>
          lists.map((listItem) => (this.listItem[listItem.id] = listItem))
        )
      );

    this.todoList = combineLatest([
      this.todoService.getTodoList(),
      this.todoService.getFilter(),
    ]).pipe(map(([todo, filter]) => UtilService.filterValues(todo, filter)));
  }

  onCheckChange(updatedTodoItem: ITodo) {
    this.todoService.updateTodoItem(updatedTodoItem);
  }

  segmentChanged($event: any) {
    this.todoService.updateFilter($event.detail.value);
  }
}
