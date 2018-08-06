import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ArticlesPage } from '../pages/articles/articles';
import { ContactPage } from '../pages/contact/contact';
import { EventsPage } from '../pages/events/events';
import { FollowPage } from '../pages/follow/follow';
import { HomePage } from '../pages/home/home';
import { MagazinePage } from '../pages/magazine/magazine';
import { InterviewsPage } from '../pages/interviews/interviews';
import { PicsPage } from '../pages/pics/pics';
import { PodcastPage } from '../pages/podcast/podcast';
import { PostPage } from '../pages/post/post';
import { TabsPage } from '../pages/tabs/tabs';
import { TvPage } from '../pages/tv/tv';
import { VideosPage } from '../pages/videos/videos';
import { WhatswherePage } from '../pages/whatswhere/whatswhere';

import { DirectivesModule } from '../directives/directives.module';

import { WordpressService } from '../services/wordpress.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { NativeStorage } from '@ionic-native/native-storage';

import { SocialSharing } from '@ionic-native/social-sharing';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ArticlesPage,
    ContactPage,
    EventsPage,
    FollowPage,
    HomePage,
    MagazinePage,
    InterviewsPage,
    PicsPage,
    PodcastPage,
    VideosPage,
    WhatswherePage,
    TabsPage,
    TvPage,
    PostPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SuperTabsModule.forRoot(),
    DirectivesModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ArticlesPage,
    ContactPage,
    EventsPage,
    FollowPage,
    HomePage,
    MagazinePage,
    InterviewsPage,
    PicsPage,
    PodcastPage,
    VideosPage,
    WhatswherePage,
    TabsPage,
    TvPage,
    PostPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
  //  NativeStorage,
    SocialSharing,
    WordpressService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
