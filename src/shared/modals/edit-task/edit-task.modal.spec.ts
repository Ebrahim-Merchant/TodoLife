import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditTaskModal } from './edit-task.modal';

describe('AddTaskPage', () => {
  let component: EditTaskModal;
  let fixture: ComponentFixture<EditTaskModal>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTaskModal ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditTaskModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
