import { Component, Input, OnInit } from '@angular/core';
import { ActionSheetController } from 'ionic-angular';
import { WorkService } from './../../providers/work-service';

@Component({
  selector: 'work-list',
  templateUrl: 'work-list.html'
})
export class WorkListComponent implements OnInit {

  works:any;
  @Input() dateStr:String;

  constructor(
    private workService:WorkService,
    private actionSheetCtrl:ActionSheetController
  ) {
  }

  ngOnInit(){
    this.workService.getDailyWorks(this.dateStr).subscribe(works => {
      this.works = works;
    });
  }

  showOptions(key){
    let actionSheet = this.actionSheetCtrl.create({
      title : '일과 삭제',
      buttons : [
        { text: '삭제', role: 'destructive', handler: () => {this.removeWork(key);}}, 
        { text: '취소', role: 'Cancel', handler: () => {console.log('Canceled');}}
      ]
    });
    actionSheet.present();
  }

  removeWork(key){
    this.workService.removeWork(key);
  }

}
