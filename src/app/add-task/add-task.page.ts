import { ModalController } from '@ionic/angular';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit, OnChanges {


  constructor(private modalController: ModalController) { }

  value: string = 'something';
  ngOnInit() {}

  dimiss() {
    this.modalController.dismiss({
      'dismissed': true
    });  }

    onChange(value) {
      console.log(value);
    }
    ngOnChanges(changes: SimpleChanges): void {
      console.log(changes);
    }

}
