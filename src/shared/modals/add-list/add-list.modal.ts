import { AppTypes } from '../../../app/state/app.actions';
import { ColorService } from '../../services/color/color.service';
import { IList } from '../../../app/state/app.service';
import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { ModalController } from '@ionic/angular';
import { Store } from '@ngrx/store';


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
    color: this.colorService.getRandomColor()
  };

  constructor(private modalController: ModalController,
              private store: Store<any>,
              private colorService: ColorService) { }

  dimiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

  ngOnInit() {
  }

  onSave(inputForm) {
    if (inputForm.form.valid) {
      this.store.dispatch({ type: AppTypes.ADD_LIST, newList: this.list });
      this.dimiss();
    }

  }
}
