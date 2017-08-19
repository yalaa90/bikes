import { Injectable } from '@angular/core';
import { CommonDataService } from '../common/commondataservice';
import { AngularFire, AngularFireDatabase } from 'angularfire2';
import { Http, Headers } from '@angular/http';
@Injectable()
export class ListService {

  private _searchObject: SearchObject = {};

  private _models;
  constructor(private cds: CommonDataService, private af: AngularFire, private http: Http) {
  }

  get searchObject(): SearchObject {
    return this._searchObject;
  }

  set searchObject(value) {
    this._searchObject = value;
  }

  get models() {
    return this._models;
  }

  set models(value) {
    this._models = value;
  }


  findDataBySeachObject() {

    let sb = this._searchObject;
    if (sb.title)
      sb.title = { "$regex": this._searchObject.title };
    if (sb.priceFrom && sb.priceTo)
      sb.price = { "$bt": [this._searchObject.priceFrom, this._searchObject.priceTo] };
    let header = new Headers();
    header.append('x-apikey', '597c6db8a63f5e835a5df8b1');
    header.append('Content-Type', 'application/json');
    return this.http.get('https://yahiardbr-2f89.restdb.io/rest/subdetails?q=' + JSON.stringify(sb), { headers: header })


  }
}
export interface SearchObject {
  type?: string,
  brand?: string,
  priceTo?: number,
  priceFrom?: number,
  area?: string,
  title?, search?,
  used?: string,
  price?: {}

}
