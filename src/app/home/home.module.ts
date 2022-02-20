import { EditTaskModalModule } from './../../shared/modals/edit-task/edit-task.module';
import { AddListModalModule } from '../../shared/modals/add-list/add-list.module';
import { AddTaskModalModule } from '../../shared/modals/add-task/add-task.module';
import { ListPageModule } from '../list/list.module';
import { FavoriteListCardComponent } from './list-card/list-card.component';
import { AppHeaderModule } from '../app-header/app-header.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    IonicModule,
    AppHeaderModule,
    CommonModule,
    ListPageModule,
    HomePageRoutingModule,
    AddTaskModalModule,
    AddListModalModule,
    EditTaskModalModule,
    FormsModule
  ],
  declarations: [HomePage, FavoriteListCardComponent]
})
export class HomePageModule {}
