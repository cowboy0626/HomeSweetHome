import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-monthly',
  templateUrl: 'monthly.html'
})
export class MonthlyPage {

  // 날짜 표시용 
  dayList:String[] =[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ngOnInit(){

    // 최근 30일 기준 날짜 데이터 생성 
    var d = new Date();
    d.setDate(d.getDate()+1);
    let turms = 30;
    for(var i=turms; i>0; i--){
      d.setDate(d.getDate() -1);
      var dateStr = d.getFullYear()+"-"+((d.getMonth()+1) >= 10? (d.getMonth()+1) : '0'+(d.getMonth()+1))+"-"+((d.getDate())>=10?(d.getDate()): '0'+(d.getDate()));
      this.dayList.push(dateStr);
    }

  }

}
