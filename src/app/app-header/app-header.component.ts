import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit {


  @Input() isLanding = false;
  @Input() hasClose = false;
  @Input() hasBack = false;
  @Input() title: string;
  @Input() subtitle: string;
  @Output() closeClicked = new EventEmitter<any>();
  @Output() backClicked = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {}

}
