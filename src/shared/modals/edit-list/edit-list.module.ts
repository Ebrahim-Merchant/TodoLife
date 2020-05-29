import { AppHeaderModule } from 'src/app/app-header/app-header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { EditListModal } from './edit-list.modal';
import { ColorPickerModule } from 'ngx-color-picker';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppHeaderModule,
    ColorPickerModule,
    IonicModule
  ],
  exports: [ EditListModal ],
  declarations: [EditListModal]
})
export class EditListModalModule {}
