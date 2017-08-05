import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
    constructor(private rs: RegistrationService, fb: FormBuilder, private ls: LoginService, ) {
        this.form = fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
            name: ['', Validators.required],
            phone: ['', Validators.required],
            address: '',
            info: '',
            facebook: ''

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
                debugger;
                this.rs.createAccount(this.form.value);
               // this.ls.login(this.form.value.email, this.form.value.password, false);
            }).catch(msg => {
                this.ls.regMessage = msg.message;
            })

        }

    }
}