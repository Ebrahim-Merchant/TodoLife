import { Observable } from "rxjs";
import { ModalController } from "@ionic/angular";
import { Component, OnInit, Input } from "@angular/core";
import { v4 as uuidv4 } from "uuid";
import { TodoService } from "src/app/state/todo.service";
import { NgForm } from "@angular/forms";
import { ITodo } from "src/app/state/todo.interface";

@Component({
  selector: "app-add-task",
  templateUrl: "./add-task.modal.html",
  styleUrls: ["./add-task.modal.scss"],
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
    dueDate: null,
  };

  constructor(
    private modalController: ModalController,
    private todoService: TodoService
  ) {}

  ngOnInit() {
    this.list = this.todoService.getListItems();
    this.todo.listId = this.listValue;
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  onSave(inputForm: NgForm) {
    if (inputForm.form.valid) {
      this.todoService.addTodoItem(this.todo);
      this.dismiss();
    }
  }
}
