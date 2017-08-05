import { Component } from '@angular/core';
import { HomeService } from './homeservice';
import { CommonDataService } from "../common/commondataservice";
import { ListService } from '../list/listservice';
import { LoginService } from '../login/loginservice';
import { Router } from '@angular/router'
import { SearchObject } from '../list/listservice'
import { LocaleService } from 'angular-l10n';
import { TypeService } from '../common/typeservice';
@Component({
  selector: 'home',
  templateUrl: 'home.html',
  providers: [HomeService, LoginService],
  styleUrls: ['home.css', '../login/login.css']
})
export class HomeComponent {
  area;
  moreClick = false;
  title: string = '1';
  sb: SearchObject = {};
  constructor(private hs: HomeService, private ls: ListService,
    private router: Router, private lgs: LoginService, private local: LocaleService,
    private ts: TypeService) {

  }

  moreFilter() {
    this.moreClick = !this.moreClick;
    console.log(this.moreClick);

  }

  search() {

    if (this.ls.searchObject) {
      this.ls.findDataBySeachObject()
      this.router.navigate(['/list']);
    }
  }
  changeLang(lang) {
    this.local.setDefaultLocale(lang, 'us');
  }
  login(user, password) {
    if (user && password) {
      this.lgs.login(user, password);
    }
    else {
      this.lgs.message = "Email Or Password Can't be empty";
    }
  }
}
