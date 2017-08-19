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
  models = [];

  constructor(public ls: ListService, public ts: TypeService, private fbs: FireBaseService) {

  }

  ngOnInit() {

    this.ls.findDataBySeachObject().subscribe(item => {
      this.ls.models = JSON.parse(item['_body']);
      this.ls.models.forEach(model => {
        this.fbs.getFileStorage(model.img).then(url => {
          model.img = url;
        })

      })



    });
  }

}
