import { DailyPage } from './../daily/daily';
import { AuthService } from './../../providers/auth-service';
import { AngularFire } from 'angularfire2';
import { Component, OnInit } from '@angular/core';

import { NavController, Platform } from 'ionic-angular';
import { AdMob } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  private admobIds:any;

  constructor(
    public navCtrl: NavController, 
    public angularFire: AngularFire,
    private authService: AuthService,
    private platform: Platform
    ) {
      // 플랫폼에 따른 Ad Unit 설정 
      this.platform = platform;
      if(/(android)/i.test(navigator.userAgent)) {
          this.admobIds = {
              banner: 'ca-app-pub-4551453179109908/3996979870',
              interstitial: 'ca-app-pub-4551453179109908/7544045476'
          };
      } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
          this.admobIds = {
              banner: 'ca-app-pub-4551453179109908/3996979870',
              interstitial: 'ca-app-pub-4551453179109908/7544045476'
          };
      }
  }

  ngOnInit(){
  }

  showBanner(position) {
      this.platform.ready().then(() => {
          if(AdMob) {
              AdMob.createBanner({
                  adId: this.admobIds.banner,
                  autoShow: false
              });
              var positionMap = {
                  "bottom": AdMob.AD_POSITION.BOTTOM_CENTER,
                  "top": AdMob.AD_POSITION.TOP_CENTER
              };
              AdMob.showBanner(positionMap[position.toLowerCase()]);
          }
      });
  }

  showInterstitial() {
      this.platform.ready().then(() => {
          if(AdMob) {
              AdMob.prepareInterstitial({
                  adId: this.admobIds.interstitial,
                  autoShow: true
              });
          }
      });
  }

  hideBanner() {
      this.platform.ready().then(() => {
          if(AdMob) {
              AdMob.hideBanner();
          }
      });
  }



  isAuth(){
    return this.authService.getAuthenticated();
  }

  signInWithFacebook():void{
    this.authService.signInWithFacebook().then((success) => {
      console.log('페이스북 로그인 성공');
      this.moveToDaily();
    });
  }

  signOut(){
    this.authService.signOut();
  }

  private moveToDaily(){
    this.navCtrl.push(DailyPage);
  }

}
