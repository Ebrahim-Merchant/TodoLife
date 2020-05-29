import { getList } from 'src/app/state/app.selector';
import { AppTypes } from 'src/app/state/app.actions';
import { AppService, ITodo } from 'src/app/state/app.service';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import * as uuid from 'uuid';
import { Store } from '@ngrx/store';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.modal.html',
  styleUrls: ['./edit-task.modal.scss'],
})
export class EditTaskModal implements OnInit {

  list: Observable<any>;
  color: any;
  @Input() todo: ITodo;

  constructor(
    private modalController: ModalController,
    private store: Store<any>) { }

  ngOnInit() {
    this.list = this.store.select(getList);
    this.todo = { ...this.todo };
  }

  dimiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

  onSave(inputform) {
    if (inputform.form.valid) {
      this.store.dispatch({ type: AppTypes.UPDATE_TODO, updatedTodoItem: this.todo});
      this.dimiss();
    }
  }

  onDelete() {
    this.store.dispatch({ type: AppTypes.DELETE_TODO, todo: [this.todo]});
    this.dimiss();
  }

}
