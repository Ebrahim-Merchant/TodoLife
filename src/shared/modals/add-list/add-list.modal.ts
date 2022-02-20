import { ColorService } from '../../services/color/color.service';
import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { ModalController } from '@ionic/angular';
import { TodoService } from 'src/app/state/todo.service';
import { IList } from 'src/app/state/todo.interface';

@Component({
  selector: 'app-add-list-modal',
  templateUrl: './add-list.modal.html',
  styleUrls: ['./add-list.modal.scss'],
})
export class AddListModal implements OnInit {
  list: IList = {
    id: uuidv4(),
    listName: null,
    count: 0,
    completed: 0,
    color: this.colorService.getRandomColor(),
  };

  constructor(
    private modalController: ModalController,
    private todoService: TodoService,
    private colorService: ColorService
  ) {}

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  ngOnInit() {}

  onSave(inputForm) {
    if (inputForm.form.valid) {
      this.todoService.addListItem(this.list);
      this.dismiss();
    }
  }
}
