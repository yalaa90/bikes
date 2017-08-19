import { Injectable } from '@angular/core';
import { CommonDataService } from '../common/commondataservice';
import { User } from '../common/commonservice';
@Injectable()
export class RegistrationService {

    constructor(private cds: CommonDataService) {
    }

    createAccount(user: User) {
        this.cds.push('users', user).subscribe(i => {
            debugger;
        });

    }
}