import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { CommonDataService } from '../common/commondataservice';
import { Router } from '@angular/router';
import { AngularFireAuth, AuthProviders, AuthMethods } from 'angularfire2/auth';
import { AngularFire } from 'angularfire2';

import * as firebase from 'firebase/app';

@Injectable()
export class LoginService {

    private _message: string;
    private _regMessage:string;
    private _islogin = false;

    constructor(public afAuth: AngularFireAuth, private router: Router, private af: AngularFire) {
      this.isLoginimplemention();
    }

    public getUserByEmail(email,fn:()=>{}) {
        
    }

    public login(user, password): void {
         debugger;
        this.afAuth.login({
            email: user
            , password: password
        },
            { provider: AuthProviders.Password, method: AuthMethods.Password }).then(i => {
                debugger;
                 
                this.router.navigate([""]);
                
            }).catch(i => {
                debugger;
                this._message = i.message;
            })
    }

    public isLogin() {
        return this.af.auth;
    }
    public isLoginimplemention() {
        return this.af.auth.subscribe(auth => {
            this._islogin = auth != null;
        });
    }

    get message() {
        return this._message;
    }

    set message(value) {
        this._message = value;
    }

    get regMessage() {
        return this._regMessage;
    }

    set regMessage(value) {
        this._regMessage = value;
    }

    get islogin() {
        return this._islogin;
    }

    set islogin(xlogin) {
        this._islogin = xlogin;
    }
    public logout() {
        debugger;
        this.afAuth.logout().then(auth => {

        })
    }
}