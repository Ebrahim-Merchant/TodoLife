import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {

  readonly console = console;
  @Input() checked;
  @Input() taskTitle;
  @Input() additionalInfo;
  @Input() set dueDate(dueDate: string) {
    if (dueDate) {
      this.formattedDateString = moment.default(dueDate).format('dddd, MMM Do YYYY');
    }
  }
  get dueDute() {
    return this.formattedDateString;
  }
  @Input() color;
  @Input() listName;
  @Input() colorStyle = 'primary';
  formattedDateString: string;
  @Output() checkedChange = new EventEmitter<boolean>();
  @Output() itemChanged = new EventEmitter<void>();

  constructor() { }

}
