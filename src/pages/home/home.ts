import { Component } from '@angular/core';
import { NavController, LoadingController, NavParams } from 'ionic-angular';
import { WordpressService } from '../../services/wordpress.service';

import { PostPage } from '../post/post';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  posts: Array<any> = new Array<any>();
  featuredMedia: any;
  morePagesAvailable: boolean = true;

  categoryId: number;
  categoryTitle: string;
  sourceURL: string;


  constructor(
  	public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public wordpressService: WordpressService,
  ) {}


  ionViewWillEnter() {
    this.featuredMedia = '';
    this.morePagesAvailable = true;

    //if we are browsing a category
    this.categoryId = this.navParams.get('id');
    this.categoryTitle = this.navParams.get('title');

    if(!(this.posts.length > 0)){

          let loading = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 3000
          });
      loading.present();

      this.wordpressService.getRecentPosts(this.categoryId)
      .subscribe(data => {
        for(let post of data){
          post.excerpt.rendered = post.excerpt.rendered.split('<a')[0] + "</p>";

          this.wordpressService.getPostMediaData(post.featured_media).subscribe(data => {
          post.source_url = data['source_url'];
          });

          this.posts.push(post);
        }
        loading.dismiss();
      });
    }
  }

  postTapped(event, post) {
		this.navCtrl.push(PostPage, {
		  item: post
		});
  }

  doInfinite(infiniteScroll) {
    let page = (Math.ceil(this.posts.length/10)) + 1;
    let loading = true;

    this.wordpressService.getRecentPosts(this.categoryId, page)
    .subscribe(data => {
      for(let post of data){
        if(!loading){
          infiniteScroll.complete();
        }
        post.excerpt.rendered = post.excerpt.rendered.split('<a')[0] + "</p>";

          this.wordpressService.getPostMediaData(post.featured_media).subscribe(data => {
          post.source_url = data['source_url'];
          }, err => {
              post.source_url = '../assets/img/talke.jpg';
          });

        this.posts.push(post);
        loading = false;
      }
    }, err => {
      this.morePagesAvailable = false;
    })
  }
  doRefresh(refresher) {

/*
      this.wordpressService.getRecentPosts(this.categoryId)
      .subscribe(data => {
        for(let post of data){
          post.excerpt.rendered = post.excerpt.rendered.split('<a')[0] + "</p>";

          this.wordpressService.getPostMediaData(post.featured_media).subscribe(data => {
          post.source_url = data['source_url'];
          }, err => {
              post.source_url = '../assets/img/talke.jpg';
          });

          this.posts.push(post);
        }
       });
    setTimeout(() => {
      refresher.complete(); // stops the refresher 2 seconds after retreiving the Data
    }, 2000);
*/
  }
 getThisPostMedia(post_id){
        this.wordpressService.getPostMediaData(post_id).subscribe(data => {
        this.featuredMedia = data['source_url'];
        });

//        console.log(this.featuredMedia);
//        return this.featuredMedia;
  }




}
