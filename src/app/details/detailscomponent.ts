import { Component, OnInit } from '@angular/core';
import { Image } from 'angular-modal-gallery';
import { Observable } from 'rxjs/Observable';
import { DetailsService } from './detailsservice';
import { AngularFire } from 'angularfire2';
import { CommonDataService } from '../common/commondataservice';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'detail',
  templateUrl: 'detailscomponent.html',
  providers: [DetailsService]

})
export class DetailsComponent implements OnInit {

  owner = {};
  detail = {};
  address = '';
  showMessageForm = false;
  key='';
  image1 = 'http://2.bp.blogspot.com/-SKfGOTZ-CpE/T5Fw2TItbWI/AAAAAAAAEGg/mG58Z-my-QQ/s640/underwater%20images%20ever%20seen%2002.jpg';
  image2 = 'https://us.123rf.com/450wm/anyaivanova/anyaivanova1507/anyaivanova150700080/43250022-tech-fixes-motherboard-in-service-center-shallow-dof-focus-on-hand-image-is-toned-with-extra-light-e.jpg?ver=6';
  imagesArray: Array<Image> = [
    new Image(this.image1, this.image2, 'image1'),
    new Image(this.image1),
    new Image(this.image1),
    new Image(this.image1),
    new Image(this.image1),
    new Image(this.image1),
    new Image(this.image1),
    new Image(this.image1),
    new Image(this.image1),
    new Image(this.image1)
  ];
  images: Observable<Array<Image>> = Observable.of(this.imagesArray)

  constructor(private ds: DetailsService, private cds: CommonDataService, private af: AngularFire, private route: ActivatedRoute,
    private router: Router) {
    this.getOwnerDetails();
  }

  getOwnerDetails() {
    this.af.auth.subscribe(i => {

      this.cds.setObjectWithCritera('users', {
        query: {
          orderByChild: 'email',
          equalTo: i.auth.email
        }
      }, (obj) => {
        this.owner = obj
      });

    })

  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.key = params['key'];
      if (this.key)
        this.cds.getWithFN('details/' + this.key, (obj) => {
          this.detail = JSON.parse(obj);
          this.address = this.detail['buildingNumber'] + " " + this.detail['streetName'] + " " + this.detail['neighborhood'];
        });


    });
  }
  show(){
    this.showMessageForm=true;
  }

}
