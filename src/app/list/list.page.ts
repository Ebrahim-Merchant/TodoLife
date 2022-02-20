import { UtilService } from 'src/shared/services/util/util.service';
import { ColorService } from 'src/shared/services/color/color.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Observable, combineLatest } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { TodoService } from '../state/todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  listPage: Observable<any>;
  color = '#000';
  listId;
  /**
   * Creates an instance of ListPage.
   * @param {Location} location
   * @param {AppService} appService
   * @param {ActivatedRoute} route
   * @param {ColorService} colorService
   * @memberof ListPage
   */
  constructor(
    public utilsService: UtilService,
    private todoService: TodoService,
    public location: Location,
    private route: ActivatedRoute,
    private colorService: ColorService) { }

  ngOnInit() {
    this.listId = this.route.snapshot.paramMap.get('id');
    this.listPage = combineLatest([
      this.todoService.getListItem(this.listId),
      this.todoService.getTodoList(this.listId),
      this.todoService.getListFilter(),
    ]).pipe(
        map(([list, todo, filter]) => ({ list, todo: UtilService.filterValues(todo, filter) })),
        tap((listItem) => listItem.list ? null : this.location.back()),
        tap((listItem) => this.setColor(listItem.list.color))
      );
  }

  setColor(color: string) {
    document.body.style.setProperty('--ion-color-secondary', color);
    document.body.style.setProperty('--ion-color-secondary-shade', this.colorService.lightenDarkenColor(color, 20));
  }

  onCheckChange(updatedTodoItem) {
    this.todoService.updateTodoItem(updatedTodoItem);
  }

  segmentChanged(event) {
    this.todoService.updateListFilter(event.target.value);
  }
}
