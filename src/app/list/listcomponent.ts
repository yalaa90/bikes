import { Component, OnInit, Inject } from '@angular/core';
import { ListService } from './listservice';
import { Router } from '@angular/router';
import { TypeService } from '../common/typeservice';
import { FireBaseService } from '../common/firebaseservice';
@Component({
  selector: 'list',
  templateUrl: 'listcomponent.html',
  // providers:[]
})
export class ListComponent implements OnInit {
  img = '';
  models = [{
    img: this.img,
    title: 'Stevens', desc: `Stevens Namur 2015 model. Str 54
    Brugt 1 sæson (15/16) som pendler cykel, og står derfor med skærme og Schawalbe Durano plus 25'.
  Schawalbe Racing Ralph 33' medfølger.
  `, price: '777', brand: 'Racing bike', seller: 'Kasper'
  }, {
    img: this.img,
    title: 'Stevens', desc: `Stevens Namur 2015 model. Str 54
    Brugt 1 sæson (15/16) som pendler cykel, og står derfor med skærme og Schawalbe Durano plus 25'.
  Schawalbe Racing Ralph 33' medfølger.
  `, price: '777', brand: 'Racing bike', seller: 'Kasper'
  }, {
    img: this.img,
    title: 'Stevens', desc: `Stevens Namur 2015 model. Str 54
    Brugt 1 sæson (15/16) som pendler cykel, og står derfor med skærme og Schawalbe Durano plus 25'.
  Schawalbe Racing Ralph 33' medfølger.
  `, price: '777', brand: 'Racing bike', seller: 'Kasper'
  }, {
    img: this.img,
    title: 'Stevens', desc: `Stevens Namur 2015 model. Str 54
    Brugt 1 sæson (15/16) som pendler cykel, og står derfor med skærme og Schawalbe Durano plus 25'.
  Schawalbe Racing Ralph 33' medfølger.
  `, price: '777', brand: 'Racing bike', seller: 'Kasper'
  }, {
    img: this.img,
    title: 'Stevens', desc: `Stevens Namur 2015 model. Str 54
    Brugt 1 sæson (15/16) som pendler cykel, og står derfor med skærme og Schawalbe Durano plus 25'.
  Schawalbe Racing Ralph 33' medfølger.
  `, price: '777', brand: 'Racing bike', seller: 'Kasper'
  }, {
    img: this.img,
    title: 'Stevens', desc: `Stevens Namur 2015 model. Str 54
    Brugt 1 sæson (15/16) som pendler cykel, og står derfor med skærme og Schawalbe Durano plus 25'.
  Schawalbe Racing Ralph 33' medfølger.
  `, price: '777', brand: 'Racing bike', seller: 'Kasper'
  }, {
    img: this.img,
    title: 'Stevens', desc: `Stevens Namur 2015 model. Str 54
    Brugt 1 sæson (15/16) som pendler cykel, og står derfor med skærme og Schawalbe Durano plus 25'.
  Schawalbe Racing Ralph 33' medfølger.
  `, price: '777', brand: 'Racing bike', seller: 'Kasper'
  }, {
    img: this.img,
    title: 'Stevens', desc: `Stevens Namur 2015 model. Str 54
    Brugt 1 sæson (15/16) som pendler cykel, og står derfor med skærme og Schawalbe Durano plus 25'.
  Schawalbe Racing Ralph 33' medfølger.
  `, price: '777', brand: 'Racing bike', seller: 'Kasper'
  }, {
    img: this.img,
    title: 'Stevens', desc: `Stevens Namur 2015 model. Str 54
    Brugt 1 sæson (15/16) som pendler cykel, og står derfor med skærme og Schawalbe Durano plus 25'.
  Schawalbe Racing Ralph 33' medfølger.
  `, price: '777', brand: 'Racing bike', seller: 'Kasper'
  }, {
    img: this.img,
    title: 'Stevens', desc: `Stevens Namur 2015 model. Str 54
    Brugt 1 sæson (15/16) som pendler cykel, og står derfor med skærme og Schawalbe Durano plus 25'.
  Schawalbe Racing Ralph 33' medfølger.
  `, price: '777', brand: 'Racing bike', seller: 'Kasper'
  }, {
    img: this.img,
    title: 'Stevens', desc: `Stevens Namur 2015 model. Str 54
    Brugt 1 sæson (15/16) som pendler cykel, og står derfor med skærme og Schawalbe Durano plus 25'.
  Schawalbe Racing Ralph 33' medfølger.
  `, price: '777', brand: 'Racing bike', seller: 'Kasper'
  }, {
    img: this.img,
    title: 'Stevens', desc: `Stevens Namur 2015 model. Str 54
    Brugt 1 sæson (15/16) som pendler cykel, og står derfor med skærme og Schawalbe Durano plus 25'.
  Schawalbe Racing Ralph 33' medfølger.
  `, price: '777', brand: 'Racing bike', seller: 'Kasper'
  }, {
    img: this.img,
    title: 'Stevens', desc: `Stevens Namur 2015 model. Str 54
    Brugt 1 sæson (15/16) som pendler cykel, og står derfor med skærme og Schawalbe Durano plus 25'.
  Schawalbe Racing Ralph 33' medfølger.
  `, price: '777', brand: 'Racing bike', seller: 'Kasper'
  }];

  constructor(private ls: ListService, private ts: TypeService, private fbs: FireBaseService) {

  }

  ngOnInit() {

    this.ls.findDataBySeachObject().subscribe(item => {
      this.models = JSON.parse(item['_body']);
      this.models.forEach(model => {
        this.fbs.getFileStorage(model.img).then(url => {
          model.img = url;
        })

      })



    });
  }

}
