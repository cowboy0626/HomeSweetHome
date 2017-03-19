import { WorkType } from './../model/work-type';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AlertController } from 'ionic-angular';

@Injectable()
export class UtilService {

  workTypes:WorkType[] = [
    { "type": "Home cleaning" , "time" : 20 },
    { "type": "Laundry washing" , "time" : 20}, 
    { "type": "Breakfast" , "time" : 15}, 
    { "type": "Breakfast dish washing" , "time" : 10 }, 
    { "type": "Lunch", "time" : 20 }, 
    { "type": "Lunch dish washing", "time" : 10 }, 
    { "type": "Dinner", "time" : 60 }, 
    { "type": "Dinner dish washing", "time" : 20 }
  ];

  workers:String[] = ["그여자", "그남자", "같이", "기타"];

  constructor(private alertCtrl:AlertController) {
  }

  getWorkTypes(){
    return this.workTypes;
  }

  getWorkers(){
    return this.workers;
  }

  getDateString(d){
    return d.getFullYear()+"-"+((d.getMonth()+1) >= 10? (d.getMonth()+1) : '0'+(d.getMonth()+1))+"-"+((d.getDate())>=10?(d.getDate()): '0'+(d.getDate()));
  }

  presentAlert(title, subTitle, buttons:String[]){
    let alert = this.alertCtrl.create({
      title : title,
      subTitle: subTitle,
      buttons: buttons
    });
    alert.present();
  }

}
