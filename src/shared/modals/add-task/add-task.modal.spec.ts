import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddTaskModal } from './add-task.modal';

describe('AddTaskPage', () => {
  let component: AddTaskModal;
  let fixture: ComponentFixture<AddTaskModal>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTaskModal ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddTaskModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
