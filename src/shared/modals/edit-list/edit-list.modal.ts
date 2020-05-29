import { Location } from '@angular/common';
import { AppTypes } from 'src/app/state/app.actions';
import { AppService, ITodo, IList } from 'src/app/state/app.service';
import { ModalController } from '@ionic/angular';
import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import * as uuid from 'uuid';
import { Store } from '@ngrx/store';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-list.modal.html',
  styleUrls: ['./edit-list.modal.scss'],
})
export class EditListModal implements OnInit {

  @Input() list: IList;

  constructor(
    private modalController: ModalController,
    private location: Location,
    private store: Store<any>) { }

  ngOnInit() {
    this.list = { ...this.list };
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

  onSave(editForm) {
    if (editForm.form.valid) {
      this.store.dispatch({ type: AppTypes.UPDATE_LIST, newList: this.list});
      this.dismiss();
    }
  }

  onDelete() {
    this.store.dispatch({ type: AppTypes.DELETE_LIST,  newList: this.list});
    this.dismiss();
  }

}
