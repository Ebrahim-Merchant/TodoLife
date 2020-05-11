import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favorite-list-card',
  templateUrl: './favorite-list-card.component.html',
  styleUrls: ['./favorite-list-card.component.scss']
})
export class FavoriteListCardComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() iconName: string;

  @Input() color = '#000000';

  constructor() { }

  ngOnInit() {
  }

}
