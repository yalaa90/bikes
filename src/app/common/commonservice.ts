import { Injectable } from '@angular/core';
@Injectable()
export class CommonService {
  private _url = 'https://rooms-d080d.firebaseio.com/';

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }
}

export interface User {
  email: string,
  name: string,
  phone: string,
  facebook?: string,
  address?: string,
  info?: string
}