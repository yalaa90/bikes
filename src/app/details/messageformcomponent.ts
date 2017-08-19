import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { CommonDataService } from '../common/commondataservice';
import { MessageFormService } from './messageformservice';
import {LoginService} from '../login/loginservice';
@Component({
    selector: 'message-form',
    templateUrl: './messageformcomponent.html',
    providers: [MessageFormService]
})
export class MessageFormComponent {
    form: FormGroup;
    @Input() show = false;
    @Input() key = '';
    @Input() onwer ;
    constructor(private cds: CommonDataService, private fb: FormBuilder, private lgs:LoginService) {
        this.form = fb.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
            message: ['', Validators.required],
            phone: ['', Validators.required],
            txtOthers: '',
            key: '',
            onwer: ''
        })
    }

    sendMessage() {
        debugger;
        this.form.patchValue({
            key: this.key,
            onwer: this.onwer
        })
        this.cds.pushwithoutresponse('messages', this.form.value);
        if (this.onwer && !this.onwer['isMerchent'])
            this.sendEmail();
        this.form.reset();
        this.show = false;
    }

    sendEmail() {
        this.cds.pushwithoutresponse("https://formspree.io/" + this.form.value.email, {
            message: this.form.value.message,
            replyto: 'yahia_aic@gmail.com',
            language: 'en',
            gotcha: 'display:none'
        }, {});
    }
    
}