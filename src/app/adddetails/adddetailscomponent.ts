import { Component } from "@angular/core";
import { AdddetailService } from "./adddetailsservice";
import { FileUploader, FileItem, FileUploaderOptions } from "ng2-file-upload";
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TypeService } from '../common/typeservice'
import { AngularFire } from 'angularfire2';
import { CommonDataService } from '../common/commondataservice';
import { CommonService } from '../common/commonservice';
import { Headers } from '@angular/http';
import {LoginService} from '../login/loginservice'
@Component({
  selector: 'add-details',
  templateUrl: 'adddetailscomponent.html',
  providers: [AdddetailService],
})
export class AddDetailsComponent {

 
  public form: FormGroup;
  public owner = {};
  public images = []
  constructor(private fb: FormBuilder, private ads: AdddetailService, public ts: TypeService, private cs: CommonService, private cds: CommonDataService, private af: AngularFire,
  public lgs:LoginService
  ) {

    this.getOwnerDetails();
    this.form = fb.group({
      price: [null, Validators.required],
      title: [null, Validators.required],
      bikeType: null,
      neighborhood: [null, Validators.required],
      streetName: null,
      buildingNumber: null,
      postCode: null,
      size: null,
      wheelSize: null,
      fromDate: Date.now(),
      toDate: null,
      used: false,
      description: null,
      productionDate: null,
      images: [],
      bikeBrand: null,
      onwer: {},
      frameType: null,
      breakType: null,
      speedCount: null,
      helper: null,
      weight: null,
      model: null


    });
  }

  pushDetails() {
    this.form.patchValue({ images: this.images })
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
