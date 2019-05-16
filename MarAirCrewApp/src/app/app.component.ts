import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Pages } from './interfaces/pages';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public appPages: Array<Pages>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController
  ) {
    this.appPages = [
      {
        title: 'Home',
        url: '/home-results',
        direct: 'root',
        icon: 'home'
      },
      {
        title: 'Inbox',
        url: '/inbox',
        direct: 'forward',
        icon: 'notifications-outline'
      },
      {
        title: 'Roster',
        url: '/roster',
        direct: 'forward',
        icon: 'calendar'
      },
      {
        title: 'Personal Docs',
        url: '/personal-docs',
        direct: 'forward',
        icon: 'document'
      },
      {
        title: 'My Logbook',
        url: '/logbook',
        direct: 'forward',
        icon: 'time'
      },
      {
        title: 'Concierge',
        url: '/concierge',
        direct: 'forward',
        icon: 'git-pull-request'
      },
      {
        title: 'Track my flight',
        url: '/track',
        direct: 'forward',
        icon: 'airplane'
      },
      {
        title: 'App Settings',
        url: '/settings',
        direct: 'forward',
        icon: 'cog'
      }
    ];

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    }).catch(() => {});
  }

  goToEditProgile() {
    this.navCtrl.navigateForward('edit-profile');
  }

  logout() {
    this.navCtrl.navigateRoot('/');
  }
}
