import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ArticlesPage } from '../articles/articles';
import { ContactPage } from '../contact/contact';
import { EventsPage } from '../events/events';
import { FollowPage } from '../follow/follow';
import { HomePage } from '../home/home';
import { MagazinePage } from '../magazine/magazine';
import { InterviewsPage } from '../interviews/interviews';
import { PicsPage } from '../pics/pics';
import { PodcastPage } from '../podcast/podcast';
import { PostPage } from '../post/post';
import { TvPage } from '../tv/tv';
import { VideosPage } from '../videos/videos';
import { WhatswherePage } from '../whatswhere/whatswhere';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PicsPage;
  tab3Root = MagazinePage;
  tab4Root = TvPage;
  tab5Root = PodcastPage;
  tab6Root = VideosPage;
  tab7Root = InterviewsPage;
  tab8Root = EventsPage;
  tab9Root = ArticlesPage;
  tab10Root = WhatswherePage;
  tab11Root = FollowPage;
  tab12Root = ContactPage;

  constructor() {

  }
}
