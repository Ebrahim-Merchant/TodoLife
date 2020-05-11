import { AppService } from './../state/app.service';
import { ColorService } from "src/shared/services/color.service";
import { Component, OnInit } from "@angular/core";
import { map, tap, filter, takeLast, reduce, take, switchMap, withLatestFrom, mergeMap } from "rxjs/operators";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AddTaskPage } from '../add-task/add-task.page';

@Component({
  selector: "app-tabs",
  templateUrl: "tabs.page.html",
  styleUrls: ["tabs.page.scss"]
})
export class TabsPage implements OnInit {
  list: Observable<any>;
  todoList: Observable<any>;
  listItem: any;


  constructor(
    private colorService: ColorService,
    private appService: AppService,
    private modalController: ModalController,
    private router: Router) {}

  ngOnInit(): void {
      this.list = this.appService.getList()
       .pipe(
        map((todoList) => {
          return todoList.map((item) => ({
            ...item,
            color: this.colorService.getRandomColor()
          }));
        }),
        map((resp) => this.listItem = resp)
      );

      this.todoList = this.appService.getTodo().pipe(
        map((todoList) => todoList.map((todoItem => {
          const listItem = this.listItem.find(listElement => listElement.id === todoItem.id);
          if (listItem) {
            return {
              ...todoItem,
              color: listItem.color,
              listName: listItem.listName
            };
          }
          return todoItem;
        })))
      );
  }

  async addTodoItem() {
    const modal = await this.modalController.create({
      component: AddTaskPage
    });
    return await modal.present();

  }
}

