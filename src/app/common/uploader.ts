import { Component, Input, Output, Inject, OnChanges , EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable, FirebaseApp } from 'angularfire2';
import { UUID } from 'angular2-uuid';
import { Observable } from 'rxjs';






@Component({

    selector: 'image-upload',
    template: `
    
  <h2 l10nTranslate>images</h2>
  <form ngNoForm>
   
   
  <ul class="list-inline">
  <li><input id="file" name="file" type="file"  accept=".jpg, .jpeg, .png"  class="inputfile"/></li>
<li><button (click)="upload()" type="button" l10nTranslate>upload</button></li>
</ul>
    
    
    
    </form>
   
          <table class="table" *ngIf="fileList.length>0">
            <thead>
              <tr>
                <th width="50%" l10nTranslate>name</th>
                <th l10nTranslate>size</th>
                <th l10nTranslate>remove</th>
                
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let item of fileList">
                <td><strong>{{ item?.name }}</strong></td>
                <td  >{{ item?.size/1024/1024 | number:'.2' }} MB</td>
                
                
                <td nowrap>
                  
                  <button type="button" class="btn btn-danger btn-xs" (click)="delete(item)" value="remove"l10nTranslate>
                  <span class="glyphicon glyphicon-trash"></span> remove
                </button>
                </td>
              </tr>
            </tbody>
          </table>
         
        <br/>



  `
})
export class UploadComponent {
    /**
     * The name of the folder for images
     * eg. posts/angular-is-awesome
     */

    firebase;
    fileList = [];
    @Output() uploadImage= new EventEmitter();;
    @Output() removeImage= new EventEmitter();;
    
    constructor(public af: AngularFire, public router: Router, @Inject(FirebaseApp) firebase: any) {
        this.firebase = firebase;
    }
    ngOnInit() {

    }




    upload() {
        // Create a root reference
        let storageRef = this.firebase.storage().ref();

        let success = false;
        // This currently only grabs item 0, TODO refactor it to grab them all
        for (let selectedFile of [(<HTMLInputElement>document.getElementById('file')).files[0]]) {
            console.log(selectedFile);
            // Make local copies of services because "this" will be clobbered
            let router = this.router;
            let af = this.af;
            if (selectedFile) {
                selectedFile['uuid'] = UUID.UUID();
                let path = `/${selectedFile['uuid']}`;
                var iRef = storageRef.child(path);
                iRef.put(selectedFile).then((snapshot) => {
                    this.fileList.push(selectedFile);
                    this.uploadImage.emit(path);
                    console.log('Uploaded a blob or file! Now storing the reference at', `/images/`);
                    af.database.list(`/images/`+path).push({filename: selectedFile.name })
                });
            }
        }

    }
    delete(image) {
        let storagePath = image['uuid'];
        let referencePath = `/images/` + storagePath;
 
        this.firebase.storage().ref().child(storagePath).delete()
            .then(
            () => {
                this.removeImage.emit(storagePath);
                this.fileList = this.fileList.filter(item => item !== image);
            },
            (error) => console.error("Error deleting stored file", storagePath)
            );

        // Delete references
        this.af.database.object(referencePath).remove()



    }
}