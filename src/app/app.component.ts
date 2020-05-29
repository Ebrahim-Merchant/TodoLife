import { AppTypes } from './state/app.actions';
import { AppService } from './state/app.service';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private appService: AppService,
    private store: Store<any>,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    this.initData();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  initData() {
    this.appService.getList().pipe(take(1)).subscribe(lists =>
      this.store.dispatch({ type: AppTypes.GET_LIST_FULFILLED, lists }));

    this.appService.getTodo().pipe(take(1)).subscribe(todo =>
        this.store.dispatch({ type: AppTypes.GET_TODO_FULFILLED, todo }));
  }
}
