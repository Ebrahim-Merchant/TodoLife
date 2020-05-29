import { AppService } from './../state/app.service';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {

  list: Observable<any>;
  color: any;

  constructor(private modalController: ModalController, private appService: AppService) { }

  ngOnInit() {
    this.list = this.appService.getList();
  }

  dimiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
