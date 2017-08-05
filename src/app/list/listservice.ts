import { Injectable } from '@angular/core';
import { CommonDataService } from '../common/commondataservice';
import { AngularFire, AngularFireDatabase } from 'angularfire2';
import { Http, Headers } from '@angular/http';
@Injectable()
export class ListService {
  private _searchValue;
  private _searchObject: SearchObject = {};

  constructor(private cds: CommonDataService, private af: AngularFire, private http: Http) {
  }



  get searchValue() {

    return this._searchValue;
  }

  set searchValue(value) {
    this._searchValue = value;
  }

  get searchObject(): SearchObject {
    return this._searchObject;
  }

  set searchObject(value) {
    this._searchObject = value;
  }

  findDataBySeachObject() {
    let sb = this._searchObject;
    if (sb.title)
      sb = this._searchObject.title = { "$regex": this._searchObject.title };
    if (sb.priceFrom && sb.priceTo)
      sb = this._searchObject.price = { "$bt": [this._searchObject.priceFrom, this._searchObject.priceTo] };
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
  title?,
  used?: string,
  price?: {}

}
