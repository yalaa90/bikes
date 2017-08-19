import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { RegistrationService } from './registrationservice';
import { LoginService } from '../login/loginservice';
import { EmailPasswordCredentials } from "angularfire2/auth"
@Component({
    selector: 'reg',
    templateUrl: 'registrationcomponent.html',
    styleUrls: ['registration.css'],
    providers: [RegistrationService, LoginService]
})
export class RegistrationComponent {

    form: FormGroup;
    constructor(private rs: RegistrationService, private router: Router, fb: FormBuilder, public ls: LoginService, ) {
        this.form = fb.group({
            email: [null, Validators.required],

            name: [null, Validators.required],
            phone: [null, Validators.required],
            isMerchent: false,
            address: null,
            info: null,
            facebook: null,
            password: null

        })
    }


    createAccount() {

        if (this.form.valid) {
            debugger;
            let cred: EmailPasswordCredentials = {
                email: this.form.value.email,
                password: this.form.value.password
            }
            this.ls.afAuth.createUser(cred).then(i => {
                this.form.patchValue({ password: null });

                this.rs.createAccount(this.form.value);
                this.router.navigate(['/'])
            }).catch(msg => {
                this.ls.regMessage = msg.message;
            })

        }

    }
}