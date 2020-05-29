import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddListModal } from './add-list.modal';

describe('AddNewListPage', () => {
  let component: AddListModal;
  let fixture: ComponentFixture<AddListModal>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddListModal ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddListModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
