import { Component } from "@angular/core";
import { AdddetailService } from "./adddetailsservice";
import { FileUploader, FileItem, FileUploaderOptions } from "ng2-file-upload";
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TypeService } from '../common/typeservice'
import { AngularFire } from 'angularfire2';
import { CommonDataService } from '../common/commondataservice';
import { CommonService } from '../common/commonservice';
import { Headers } from '@angular/http';
@Component({
  selector: 'add-details',
  templateUrl: 'adddetailscomponent.html',
  providers: [AdddetailService],
})
export class AddDetailsComponent {


  public uploader: FileUploader = new FileUploader({
    url: 'https://rooms-d080d.firebaseio.com/images.json'
    , method: 'POST',
    disableMultipart: false
  });
  public form: FormGroup;
  public owner = {};
  public images = []
  constructor(private fb: FormBuilder, private ads: AdddetailService, private ts: TypeService, private cs: CommonService, private cds: CommonDataService, private af: AngularFire) {

    this.getOwnerDetails();
    this.form = fb.group({
      price: ['', Validators.required],
      title: ['', Validators.required],
      bikeType: '',
      neighborhood: ['', Validators.required],
      streetName: '',
      buildingNumber: '',
      postCode: '',
      size: '',
      wheelSize: '',
      fromDate: Date.now(),
      toDate: '',
      used: false,
      description: '',
      productionDate: '',
      images: [],
      bikeBrand: '',
      onwer: {},
      frameType: '',
      breakType: '',
      speedCount: '',
      helper: false,
      weight: '',
      model: ''


    });
  }

  pushDetails() {
    this.ads.pushDetails(this.form.value);

  }

  uploadImage(image) {
    this.images.push(image);
  }
  removeImage(image) {
    this.images = this.images.filter(item => item != image);
  }
  getDetails(key) {
    this.ads.getDetails(key);
  }
  upload(file) {
    debugger;
    //this.images.push(file);
  }
  getOwnerDetails() {
    this.af.auth.subscribe(i => {

      this.cds.setObjectWithCritera('users', {
        query: {
          orderByChild: 'email',
          equalTo: i.auth.email
        }
      }, (obj) => {
        this.form.patchValue({ onwer: this.owner });
        this.owner = obj
      });

    })

  }

  typeChange(type) {
    if (type) {
      this.ts.models = this.ts.bikeBrands.filter(item => item.value == type)[0]['models'];
    }

  }

}
