import { AppHeaderModule } from './../app-header/app-header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTaskPageRoutingModule } from './add-task-routing.module';

import { AddTaskPage } from './add-task.page';
import { ColorPickerModule } from 'ngx-color-picker';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppHeaderModule,
    ColorPickerModule,
    IonicModule,
    AddTaskPageRoutingModule
  ],
  exports: [ AddTaskPage ],
  declarations: [AddTaskPage]
})
export class AddTaskPageModule {}
