import { WorkService } from './../../providers/work-service';
import { AngularFire } from 'angularfire2';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UtilService } from './../../providers/util-service';
import { Work } from './../../model/work';

@Component({
  selector: 'page-daily',
  templateUrl: 'daily.html'
})
export class DailyPage {

  workTypes: any;
  workers: any;
  dateStr: String;
  work: Work = new Work("", "", 0, "", "", "", "");

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private utilService: UtilService,
    public angularFire: AngularFire, 
    private workService: WorkService
  ) {
    // 1 - 유형값 설정 및 오늘날짜 설정 
    this.workTypes = utilService.getWorkTypes();
    this.workers = utilService.getWorkers();
    this.dateStr = utilService.getDateString(new Date()); 

    // 2. 업무기본값 설정 
    this.angularFire.auth.subscribe(auth => {
      this.work.memberId = auth.uid;
    });
    this.work.dateStr = this.dateStr;
    this.work.regDate = this.dateStr;
  }

  ionViewDidLoad() {
  }

  // 3. 일 추가하기 
  addWork(){
    if(this.work.workType === "" || this.work.worker === ""){
      this.utilService.presentAlert("입력체크오류", "유형과 담당자는 필수값입니다", ["취소"]);
    } else {
       this.workService.addWork(this.work);
       this.initWork();
    }
  }

  // 4. 값 초기화하기 
  initWork(){
    this.work = new Work("", "", 0, "", "", "", "");
  }


}
