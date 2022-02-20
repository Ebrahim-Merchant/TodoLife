import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { TodoService } from 'src/app/state/todo.service';
import {  NgForm } from '@angular/forms';
import { ITodo } from 'src/app/state/todo.interface';


@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.modal.html',
  styleUrls: ['./edit-task.modal.scss'],
})
export class EditTaskModal implements OnInit {

  list: Observable<any>;
  @Input() todo: ITodo;

  constructor(
    private modalController: ModalController,
    private todoService: TodoService
    ) { }

  ngOnInit() {
    this.list = this.todoService.getListItems();
    this.todo = {...this.todo};
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

  onSave(taskForm: NgForm) {
    if (taskForm.form.valid) {
      this.todoService.updateTodoItem(this.todo)
      this.dismiss();
    }
  }

  onDelete() {
    this.todoService.removeTodoItem(this.todo)
    this.dismiss();
  }

  todoStatus(checked: boolean) {
    this.todo.status = !checked;
  }

}
