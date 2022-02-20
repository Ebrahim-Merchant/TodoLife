import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from 'src/app/state/todo.service';
import { IList } from 'src/app/state/todo.interface';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-list.modal.html',
  styleUrls: ['./edit-list.modal.scss'],
})
export class EditListModal implements OnInit {

  @Input() list: IList;

  constructor(
    private modalController: ModalController,
    private todoService: TodoService
    ) { }

  ngOnInit() {
    this.list = Object.assign(this.list);
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

  onSave(editForm) {
    if (editForm.form.valid) {
      this.todoService.updateListItem(this.list)
      this.dismiss();
    }
  }

  onDelete() {
    this.todoService.removeListItem(this.list)
    this.dismiss();
  }

}
