import { Injectable } from "@angular/core";
import { Http , Headers} from "@angular/http";
import { CommonService } from "./commonservice";
import { FormGroup } from '@angular/forms';
import { AngularFire } from 'angularfire2';

@Injectable()
export class CommonDataService {

  constructor(private http: Http, private cs: CommonService, private af: AngularFire) {
  }

  public pushwithoutresponse(url: string, body, header?) {
    debugger;
    if (header)
      this.http.post(url, body, { headers: header }).subscribe(item => {
        debugger;
      });
    else
      this.http.post(this.cs.url + url + '.json', body).subscribe(i => {
        debugger;
        console.log(i);
      });
  }

  public push(url: string, body) {
    return this.http.post(this.cs.url + url + '.json', body);
  }


  public get(url: string) {
    return this.http.get(this.cs.url + url + '.json');

  }

  public getWithCritera(url: string, critera) {

    return this.af.database.object(url, critera);

  }
  public getWithFN(url: string, fn: (parm1) => void) {
    this.http.get(this.cs.url + url + '.json').subscribe(i => {
      if (i)
        fn(i['_body']);
    });

  }

  public setForm(url, form: FormGroup) {
    this.get(url).subscribe(i => {
      form.patchValue(i);
    })

  }

  public setFormWithCritera(url, critera, form: FormGroup) {
    this.getWithCritera(url, critera).subscribe(i => {
      if (form)
        form.patchValue(this.firstElementInObject(i));
    })
  }

  public setObjectWithCritera(url, critera, fn: (obj) => void) {
    this.getWithCritera(url, critera).subscribe(i => {
      if (fn)
        fn(this.firstElementInObject(i));
    })
  }

  public firstElementInObject(obj) {
    for (let item in obj) {
      return obj[item];
    }
  }
}
