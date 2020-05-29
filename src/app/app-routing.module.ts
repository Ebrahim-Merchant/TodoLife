import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list/:id',
    loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'add-task',
    loadChildren: () => import('../shared/modals/add-task/add-task.module').then( m => m.AddTaskModalModule)
  },
  {
    path: 'add-new-list',
    loadChildren: () => import('../shared/modals/add-list/add-list.module').then( m => m.AddListModalModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
