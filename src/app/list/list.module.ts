import { ListItemComponent } from './list-item/list-item.component';
import { AppHeaderModule } from './../app-header/app-header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPageRoutingModule } from './list-routing.module';

import { ListPage } from './list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppHeaderModule,
    IonicModule,
    ListPageRoutingModule
  ],
  exports: [
    ListPage,
    ListItemComponent
  ],
  declarations: [ListPage, ListItemComponent]
})
export class ListPageModule {}
