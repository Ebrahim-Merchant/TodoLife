import { ColorService } from './../../shared/services/color.service';
import { AppService } from './../state/app.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { map, tap, take, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  listPage: Observable<any>;
  color = '#000';

  /**
   * Creates an instance of ListPage.
   * @param {Location} location
   * @param {AppService} appService
   * @param {ActivatedRoute} route
   * @param {ColorService} colorService
   * @memberof ListPage
   */
  constructor(
    private location: Location,
    private appService: AppService,
    private route: ActivatedRoute,
    private colorService: ColorService) { }

  ngOnInit() {
    this.listPage = this.appService.getTodo(1);
    this.route.queryParamMap.pipe(
      takeWhile((queryMap) => queryMap.has('color'))
    ).subscribe((queryMap) => {
        const color = queryMap.get('color');
        document.body.style.setProperty('--ion-color-primary', color);
        document.body.style.setProperty('--ion-color-primary-shade',  this.colorService.LightenDarkenColor(color, 20));
      });
  }

}
