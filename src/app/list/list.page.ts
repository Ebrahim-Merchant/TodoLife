import { UtilService } from 'src/shared/services/util/util.service';
import { AppTypes } from 'src/app/state/app.actions';
import { getSelectedList, listVisibilityFilter } from 'src/app/state/app.selector';
import { ColorService } from 'src/shared/services/color/color.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Observable, combineLatest } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { getTodoItems } from 'src/app/state/app.selector';

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
    public location: Location,
    private route: ActivatedRoute,
    private store: Store<any>,
    private colorService: ColorService) { }

  ngOnInit() {
    this.listId = this.route.snapshot.paramMap.get('id');
    this.listPage = combineLatest([
      this.store.select(getSelectedList(this.listId)),
      this.store.select(getTodoItems(this.listId)),
      this.store.select(listVisibilityFilter)
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
    this.store.dispatch({ type: AppTypes.UPDATE_TODO, updatedTodoItem });
  }

  segmentChanged(event) {
    this.store.dispatch({ type: AppTypes.UPDATE_LIST_FILTER, filter: event.detail.value });
  }
}
