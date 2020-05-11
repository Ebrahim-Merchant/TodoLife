import { AppHeaderModule } from './../app-header/app-header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTaskPageRoutingModule } from './add-task-routing.module';

import { AddTaskPage } from './add-task.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppHeaderModule,
    IonicModule,
    AddTaskPageRoutingModule
  ],
  exports: [ AddTaskPage ],
  declarations: [AddTaskPage]
})
export class AddTaskPageModule {}
