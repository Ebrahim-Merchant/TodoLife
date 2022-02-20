import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  readonly console = console;
  _dueDate: string;
  @Input() set dueDate(dueDate: string) {
    if (dueDate) {
      this._dueDate = moment.default(dueDate).format('dddd, MMM Do YYYY');
    }
  }
  get dueDate() {
    return this._dueDate;
  }

  @Input() checked;
  @Input() taskTitle;
  @Input() additionalInfo;
  @Input() color;
  @Input() listName;
  @Input() colorStyle = 'primary';
  @Output() checkedChange = new EventEmitter<boolean>();
  @Output() itemChanged = new EventEmitter<'trash' | 'edit'>();
}
