import { Component } from '@angular/core';
import { LoginService } from './loginservice';
@Component({
    selector: 'login',
    templateUrl: 'logincomponent.html',
    styleUrls: ['login.css'],
    providers: [LoginService]

})

export class loginComponent {
    message: string;
    constructor(public ls: LoginService) {

    }
    
    login(user, password) {
        debugger;
        if (user && password) {
            this.ls.login(user, password);
        }
        else {
            this.ls.message = "Email Or Password Can't be empty";
        }
    }

}
