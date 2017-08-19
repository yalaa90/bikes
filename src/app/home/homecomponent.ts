import { Component } from '@angular/core';
import { HomeService } from './homeservice';
import { CommonDataService } from "../common/commondataservice";
import { ListService } from '../list/listservice';
import { LoginService } from '../login/loginservice';
import { Router } from '@angular/router'
import { SearchObject } from '../list/listservice'
import { LocaleService } from 'angular-l10n';
import { TypeService } from '../common/typeservice';
import { FireBaseService } from '../common/firebaseservice'
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
  constructor(private hs: HomeService, public ls: ListService,
    private router: Router, public lgs: LoginService, private local: LocaleService,
    public ts: TypeService, private fbs: FireBaseService) {

    let lang = local.getCurrentLanguage();
    this.changeLang(lang);
  }

  moreFilter() {
    this.moreClick = !this.moreClick;
    console.log(this.moreClick);

  }

  search() {

    if (this.ls.searchObject) {
      let title = this.ls.searchObject.title;
      this.ls.findDataBySeachObject().subscribe(item => {
        this.ls.models = JSON.parse(item['_body']);
        this.ls.models.forEach(model => {
          this.fbs.getFileStorage(model.img).then(url => {
            model.img = url;
          })
         
        })
         this.ls.searchObject.title = title;
      })
      this.router.navigate(['/list']);
    }
  }
  changeLang(lang) {
    if (lang == 'ar') this.lgs.dir = 'rtl';
    else this.lgs.dir = '';
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

  enter() {
    this.search();
    this.moreClick = false;

  }
}
