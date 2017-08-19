import { BrowserModule } from "@angular/platform-browser";
import { NgModule ,APP_INITIALIZER} from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";

import "hammerjs"; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save hammerjs @types/hammerjs`)
import "mousetrap"; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save mousetrap @types/mousetrap`)
import { ModalGalleryModule } from "angular-modal-gallery";
import { DetailsComponent } from "./details/detailscomponent";
import { AngularFireModule } from "angularfire2";
import { AddDetailsComponent } from "./adddetails/adddetailscomponent";
import { FileUploadModule } from "ng2-file-upload";
import { CommonService } from "./common/commonservice";
import { TypeService } from "./common/typeservice";
import { CommonDataService } from "./common/commondataservice";
import { ListComponent } from "./list/listcomponent";
import { ListCardComponent } from "./listcard/listcardcomponent";
import { TruncatePipe } from "./common/pipes/limtedtoPipe";
import { HomeComponent } from "./home/homecomponent";
import { RouterModule } from "@angular/router";
import { ListService } from "./list/listservice";
import { AdddetailService } from './adddetails/adddetailsservice';
import { RegistrationComponent } from './registration/registrationcomponent'
import { loginComponent } from './login/logincomponent';
import {MessageFormComponent} from './details/messageformcomponent'
import { LocalizationModule, LocaleService, TranslationService } from 'angular-l10n';
import {LocalizationConfig} from './common/localizationconfig';
import {UploadComponent} from './common/uploader';
import {FireBaseService} from './common/firebaseservice';

export const rout = [
  
  { path: 'list', component: ListComponent },
  { path: 'reg', component: RegistrationComponent},
  { path: 'add', component: AddDetailsComponent },
  {path: 'detials/:key', component: DetailsComponent}
]
/*export const firebaseConfig = {
    apiKey: "AIzaSyA0F5wzRmzY--QlSduyy578cMVPVA32HVg",
    authDomain: "rooms-d080d.firebaseapp.com",
    databaseURL: "https://rooms-d080d.firebaseio.com",
    projectId: "rooms-d080d",
    storageBucket: "rooms-d080d.appspot.com",
    messagingSenderId: "383953696649"
  };
*/
export const firebaseConfig = {
    apiKey: "AIzaSyDsM4pg3Ri5dRoC3reXsGClUfE6SNBH06Y",
    authDomain: "agla-e0e34.firebaseapp.com",
    databaseURL: "https://agla-e0e34.firebaseio.com",
    projectId: "agla-e0e34",
    storageBucket: "agla-e0e34.appspot.com"
  };
  
export function initLocalization(localizationConfig: LocalizationConfig): Function {
    return () => localizationConfig.load();
}

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    AddDetailsComponent,
    ListComponent,
    ListCardComponent,
    TruncatePipe,
    HomeComponent,
    RegistrationComponent,
    loginComponent,
    MessageFormComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ModalGalleryModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    FileUploadModule,
    RouterModule.forRoot(rout),
    LocalizationModule.forRoot()
  ],
  providers: [CommonService, CommonDataService, ListService,TypeService,LocalizationConfig,{
      provide: APP_INITIALIZER,
      useFactory: initLocalization,
      deps: [LocalizationConfig],
      multi: true
    },FireBaseService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
