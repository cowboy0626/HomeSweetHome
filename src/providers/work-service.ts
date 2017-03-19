import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class WorkService {

  memberId:String;
  workObservable:FirebaseListObservable<any[]>;

  constructor(
    public angularFire:AngularFire
  ) {
    // 1. 로그인 회원ID확인 
    angularFire.auth.subscribe(auth => {
      this.memberId = auth.uid;
    });

    // 2. 로그인 회원의 일과정보 가져오기 
    this.workObservable = angularFire.database.list('/works', {query: { orderByChild: 'memberId', equalTo: this.memberId }});
  }

  getWorks(){
    return this.workObservable;
  }

  getDailyWorks(dateStr){
    return this.workObservable.map(_works => {
      const filtered = _works.filter(work => work.dateStr === dateStr);
      return filtered;
    }).map((array) => array.reverse());
  }

  addWork(work){
    this.workObservable.push(work);
  }

  removeWork(workId){
    this.workObservable.remove(workId);
  }

}
