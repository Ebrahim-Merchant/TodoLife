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
  selector: 'app-add-task',
  templateUrl: './add-task.modal.html',
  styleUrls: ['./add-task.modal.scss'],
})
export class AddTaskModal implements OnInit {

  @Input() listValue;

  list: Observable<any>;
  color: any;
  todo: ITodo = {
    id: uuidv4(),
    taskTitle: null,
    listId: null,
    extraDetails: null,
    status: false,
    dueDate: null
  };

  constructor(
    private modalController: ModalController,
    private store: Store<any>,
    private appService: AppService) { }

  ngOnInit() {
    this.list = this.store.select(getList);
    this.todo.listId = this.listValue;
    console.log(this.listValue);
  }

  dimiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

  onSave(inputForm) {
    console.log(inputForm);
    if (inputForm.form.valid) {
      this.store.dispatch({ type: AppTypes.ADD_TODO_FULFILLED, todo: [this.todo]});
      this.dimiss();
      }
    }

}
