import { Component, Input} from '@angular/core';
import { ListService } from '../list/listservice';
@Component({
    selector: 'search-panel',
    templateUrl: 'searchpanelcomponent.html'
})
export class SearchPanelComponent {

    constructor(private ls: ListService) {
        
    }

}
