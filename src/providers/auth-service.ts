import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { FirebaseAuthState, AngularFireAuth, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class AuthService {

  private authState: FirebaseAuthState;

  constructor(
    public auth:AngularFireAuth
  ) {
    auth.subscribe((state:FirebaseAuthState) => {
      this.authState = state;
    });
  }

  getAuthenticated():boolean {
    return this.authState !== null;
  }

  signInWithFacebook():firebase.Promise<FirebaseAuthState>{
    return this.auth.login({
      provider:AuthProviders.Facebook,
      method: AuthMethods.Popup
    });
  }

  signOut():void {
    this.auth.logout();
  }  

}
