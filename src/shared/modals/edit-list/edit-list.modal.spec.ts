import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditListModal } from './edit-list.modal';

describe('AddTaskPage', () => {
  let component: EditListModal;
  let fixture: ComponentFixture<EditListModal>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditListModal ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditListModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
