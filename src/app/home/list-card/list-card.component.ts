import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-favorite-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class FavoriteListCardComponent {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() iconName: string;
  @Input() isColumn = false;
  @Input() color = '#000000';
}
