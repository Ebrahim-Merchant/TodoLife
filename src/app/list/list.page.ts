import { UtilService } from 'src/shared/services/util/util.service';
import { EditTaskModal } from './../../shared/modals/edit-task/edit-task.modal';
import { AppTypes } from './../state/app.actions';
import { getSelectedList, listVisibilityFilter } from './../state/app.selector';
import { ColorService } from '../../shared/services/color/color.service';
import { AppService } from './../state/app.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Observable, zip, combineLatest } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { map, tap, take, takeWhile, concatMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { getTodoItems } from '../state/app.selector';
import { ModalController } from '@ionic/angular';
import { AddTaskModal } from '../../shared/modals/add-task/add-task.modal';

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
    private modalController: ModalController,
    private route: ActivatedRoute,
    private store: Store<any>,
    private colorService: ColorService) { }

  ngOnInit() {
    this.listId = this.route.snapshot.paramMap.get('id');
    this.listPage = combineLatest(
      this.store.select(getSelectedList(this.listId)),
      this.store.select(getTodoItems(this.listId)),
      this.store.select(listVisibilityFilter)
    ).pipe(
        map(([list, todo, filter]) => ({ list, todo: UtilService.filterValues(todo, filter) })),
        tap((listItem) => listItem.list ? null : this.location.back()),
        tap((listItem) => this.setColor(listItem.list.color))
      );
  }

  setColor(color: string) {
    document.body.style.setProperty('--ion-color-secondary', color);
    document.body.style.setProperty('--ion-color-secondary-shade', this.colorService.LightenDarkenColor(color, 20));
  }

  onCheckChange(updatedTodoItem) {
    this.store.dispatch({ type: AppTypes.UPDATE_TODO, updatedTodoItem });
  }

  segmentChanged(event) {
    this.store.dispatch({ type: AppTypes.UPDATE_LIST_FILTER, updateVisibility: event.detail.value });
  }
}
