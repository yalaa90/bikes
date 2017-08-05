import { Injectable, Inject } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
@Injectable()
export class FireBaseService {
    firebase;
    constructor( @Inject(FirebaseApp) firebase: any) {
        this.firebase = firebase;
    }

    getFileStorage(filePath) {
        return this.firebase.storage().ref().child(filePath).getDownloadURL();

    }

    upload(file) {

    }

    remove(filePath) {

    }
}