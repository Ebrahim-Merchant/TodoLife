import { ColorService } from '../../services/color/color.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { AddListModal } from './add-list.modal';
import { AppHeaderModule } from '../../../app/app-header/app-header.module';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppHeaderModule,
    ColorPickerModule,
    IonicModule
  ],
  declarations: [AddListModal],
  exports: [AddListModal]
})
export class AddListModalModule {}
