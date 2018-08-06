import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavParams, NavController, LoadingController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { WordpressService } from '../../services/wordpress.service';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';

import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-post',
  templateUrl: 'post.html'
})
export class PostPage {

  post: any;
  user: string;
  comments: Array<any> = new Array<any>();
  categories: Array<any> = new Array<any>();
  featuredmedia: Array<any> = new Array<any>();
  morePagesAvailable: boolean = true;

  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public wordpressService: WordpressService,
    public socialSharing: SocialSharing,
    private sanitizer:DomSanitizer
  ) {

  }

  ionViewWillEnter(){
//    this.featuredmedia.source_url = '';
    this.morePagesAvailable = true;
  //  let loading = this.loadingCtrl.create();

//    loading.present();

    this.post = this.navParams.get('item');
    Observable.forkJoin(
      this.getAuthorData(),
      this.getCategories(),
      this.getMedia(),
      this.getComments())
      .subscribe(data => {
        this.user = data[0].name;
        this.categories = data[1];
        this.featuredmedia = data[2];
        this.comments = data[3];
     //   loading.dismiss();

         console.log(data);
      });
  }

  getAuthorData(){
    return this.wordpressService.getAuthor(this.post.author);
  } 

  sanitizeData(postData){
    return this.sanitizer.bypassSecurityTrustHtml(postData);
  }


  getCategories(){
    return this.wordpressService.getPostCategories(this.post);
  }

  getComments(){
    return this.wordpressService.getComments(this.post.id);
  }

  getMedia(){
      return this.wordpressService.getPostMedia(this.post.featured_media);
  }

  loadMoreComments(infiniteScroll) {
    let page = (this.comments.length/10) + 1;
    this.wordpressService.getComments(this.post.id, page)
    .subscribe(data => {
      for(let item of data){
        this.comments.push(item);
      }
      infiniteScroll.complete();
    }, err => {
      console.log(err);
      this.morePagesAvailable = false;
    })
  }

  goToCategoryPosts(categoryId, categoryTitle){
    this.navCtrl.push(HomePage, {
      id: categoryId,
      title: categoryTitle
    })
  }

  compilemsg(index):string{
    var msg = this.post.content + "-" + this.post.title ;
    return msg.concat(" \n Sent from my TalkeApp !");
  }  
 
  goback() {
    this.navCtrl.pop();
  }

  regularShare(index){
  var msg = this.compilemsg(index);
  this.socialSharing.share(msg, null, null, null);
  }

  whatsappShare(index){
    var msg  = this.compilemsg(index);
     this.socialSharing.shareViaWhatsApp(msg, null, null);
   } 
  twitterShare(index){
    var msg  = this.compilemsg(index);
    this.socialSharing.shareViaTwitter(msg, null, null);
  }   
  facebookShare(index){
   var msg  = this.compilemsg(index);
    this.socialSharing.shareViaFacebook(msg, null, null);
  }
}
