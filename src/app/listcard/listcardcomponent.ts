import {Component, Input} from "@angular/core";
import {ListCardService} from "./listcardservice";
import {LoginService} from '../login/loginservice';
@Component({
  selector: 'list-card',
  templateUrl: 'listcardcomponent.html',
  providers: [ListCardService]
})
export class ListCardComponent {

  @Input() public model;

  constructor(private  lcs: ListCardService, public lgs:LoginService) {

  }


}
