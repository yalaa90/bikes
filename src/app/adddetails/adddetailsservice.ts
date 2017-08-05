import { Injectable } from '@angular/core';
import { CommonDataService } from '../common/commondataservice';
import { Router } from '@angular/router';
import { Headers } from '@angular/http';
@Injectable()
export class AdddetailService {

  private header = new Headers();
  constructor(private cds: CommonDataService, private router: Router) {

  }

  public pushDetails(model) {
    this.cds.push('details', model).subscribe(item => {
      let key = JSON.parse(item['_body']).name;
      this.pushSubDetails(model, key);
      this.router.navigate(['detials', key]);
    })

  }

  public getDetails(key) {
    this.cds.get('details/' + key);
  }

  public pushSubDetails(model, key) {
    this.header.append('x-apikey', '597c6db8a63f5e835a5df8b1');
    this.header.append('Content-Type', 'application/json');
   /* this.header.append('Access-Control-Allow-Headers', '*');
    this.header.append('Access-Control-Request-Headers','*');*/
    let onwerName = model.owner ? model.owner.name : '';
    let subModel = {
      key: key, title: model.title, desc: model.description, price: model.price
      , brand: model.bikeType, seller: onwerName,img:'https://secondhandbikes.dk/Catalog/Images/17-04-01-05-40-43--IMG_1010.JPG',
      used:model.used,area:model.neighborhood
    };
    this.cds.pushwithoutresponse('https://yahiardbr-2f89.restdb.io/rest/subdetails', subModel, this.header);
  }

}
