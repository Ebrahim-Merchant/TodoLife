import { EditTaskModal } from 'src/shared/modals/edit-task/edit-task.modal';
import { EditListModal } from './edit-list/edit-list.modal';
import { AddTaskModal } from './add-task/add-task.modal';
import { EditListModalModule } from './edit-list/edit-list.module';
import { EditTaskModalModule } from './edit-task/edit-task.module';
import { AddListModalModule } from './add-list/add-list.module';
import { AddTaskModalModule } from './add-task/add-task.module';
import { NgModule } from '@angular/core';
import { AddListModal } from './add-list/add-list.modal';

@NgModule({
    imports: [AddTaskModalModule, AddListModalModule, EditTaskModalModule, EditListModalModule],
    exports: [AddTaskModalModule, AddListModalModule, EditTaskModalModule , EditListModalModule],
    entryComponents: [ AddTaskModal, AddListModal, EditListModal, EditTaskModal],
    providers: [],
})
export class ModalModule { }
