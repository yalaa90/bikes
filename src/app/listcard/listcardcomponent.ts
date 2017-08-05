import {Component, Input} from "@angular/core";
import {ListCardService} from "./listcardservice";
@Component({
  selector: 'list-card',
  templateUrl: 'listcardcomponent.html',
  providers: [ListCardService]
})
export class ListCardComponent {

  @Input() public model;

  constructor(private  lcs: ListCardService) {

  }


}
