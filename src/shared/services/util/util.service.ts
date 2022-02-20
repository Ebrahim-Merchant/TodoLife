import { EditListModal } from './../../modals/edit-list/edit-list.modal';
import { ModalController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { AddTaskModal } from 'src/shared/modals/add-task/add-task.modal';
import { AddListModal } from 'src/shared/modals/add-list/add-list.modal';
import { EditTaskModal } from 'src/shared/modals/edit-task/edit-task.modal';
import { VisibilityFilter } from 'src/app/state/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  static filterValues(todo, filterString) {
    if (filterString === VisibilityFilter.COMPLETED) {
      return todo.filter(todoItem => todoItem.status === true);
    } else if (filterString === VisibilityFilter.PENDING) {
      return todo.filter(todoItem => todoItem.status === false);
    }
    return todo;
  }

  constructor(private modalController: ModalController) { }

  async showAddTaskModal(props?) {
    const modal = await this.modalController.create({
      component: AddTaskModal,
      ...props
    });
    return await modal.present();
  }

  async showAddListModal(props?) {
    const modal = await this.modalController.create({
      component: AddListModal,
      ...props
    });
    return await modal.present();
  }

  async showEditTaskModal(props?) {
    const modal = await this.modalController.create({
      component: EditTaskModal,
      ...props
    });
    return await modal.present();
  }

  async showEditListModal(props?) {
    const modal = await this.modalController.create({
      component: EditListModal,
      ...props
    });
    return await modal.present();
  }
}
