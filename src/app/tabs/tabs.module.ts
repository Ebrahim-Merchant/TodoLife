import { AddTaskPageModule } from './../add-task/add-task.module';
import { ListPageModule } from './../list/list.module';
import { FavoriteListCardComponent } from './favorite-list-card/favorite-list-card.component';
import { AppHeaderModule } from './../app-header/app-header.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { TabsPage } from './tabs.page';
import { TabsPageRoutingModule } from './tabs-routing.module';

@NgModule({
  imports: [
    IonicModule,
    AppHeaderModule,
    CommonModule,
    ListPageModule,
    TabsPageRoutingModule,
    AddTaskPageModule,
    FormsModule  ],
  declarations: [TabsPage, FavoriteListCardComponent]
})
export class TabsPageModule {}
