import {Injectable} from "@angular/core";
import {CommonDataService} from "../common/commondataservice";
@Injectable()
export class ListCardService {
  constructor(private cds: CommonDataService) {

  }
}
