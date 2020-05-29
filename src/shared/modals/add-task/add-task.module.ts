import { AppHeaderModule } from 'src/app/app-header/app-header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { AddTaskModal } from './add-task.modal';
import { ColorPickerModule } from 'ngx-color-picker';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppHeaderModule,
    ColorPickerModule,
    IonicModule
  ],
  exports: [ AddTaskModal ],
  declarations: [AddTaskModal]
})
export class AddTaskModalModule {}
