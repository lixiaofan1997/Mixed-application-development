import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { APage } from '../pages/a/a';
import { BPage } from '../pages/b/b';
import { ZhucePage } from '../pages/zhuce/zhuce';
import { ComponentsModule } from '../components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { CPage } from '../pages/c/c';
import { AddPageModule } from '../pages/add/add.module';
import { AddPage } from '../pages/add/add';
import { ShezhiPage } from '../pages/shezhi/shezhi';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    APage,
    BPage,
    ZhucePage,
    CPage,
    AddPage,
    ShezhiPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: '',
      tabsHideOnSubPages:true //是否隐藏子页面上的选项卡。如果true它不会显示子页面上的选项卡。
      // iconMode: 'ios',
      // modalEnter: 'modal-slide-in',
      // modalLeave: 'modal-slide-out',
      // tabsPlacement: 'bottom',
      // pageTransition: 'ios-transition'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    APage,
    BPage,
    ZhucePage,
    CPage,
    AddPage,
    ShezhiPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
