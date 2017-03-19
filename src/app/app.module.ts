import { WorkListComponent } from './../components/work-list/work-list';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

// Angular Fire 설정
import { AngularFireModule } from 'angularfire2';
export const firebaseConfig = {
  apiKey: "AIzaSyCJl7Yje3mDrNnOUyDSu7vwx4hfd4kSBCo",
  authDomain: "homesweethome-e3d5a.firebaseapp.com",
  databaseURL: "https://homesweethome-e3d5a.firebaseio.com",
  storageBucket: "homesweethome-e3d5a.appspot.com",
  messagingSenderId: "1012357892296"
};

// 서비스 추가 
import { AuthService } from './../providers/auth-service';
import { WorkService } from './../providers/work-service';
import { UtilService } from './../providers/util-service';

// 페이지 추가 
import { MonthlyPage } from './../pages/monthly/monthly';
import { DailyPage } from './../pages/daily/daily';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage, 
    DailyPage,
    MonthlyPage,
    WorkListComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp), 
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage, 
    DailyPage,
    MonthlyPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    WorkService,
    UtilService
  ]
})
export class AppModule {}
