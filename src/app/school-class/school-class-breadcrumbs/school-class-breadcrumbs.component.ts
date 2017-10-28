import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-school-class-breadcrumbs',
  templateUrl: './school-class-breadcrumbs.component.html',
  styleUrls: ['./school-class-breadcrumbs.component.css']
})
export class SchoolClassBreadcrumbsComponent implements OnInit, OnDestroy {

    id : number;
    inscription : Subscription;

    constructor (
      private route : ActivatedRoute
    ) { }

    ngOnInit() {
      /*this.inscription = this.route.url.subscribe (
        (params : any) => {
          console.log(params)
        }
      )*/

      console.log(this.route.snapshot.url.values); // array of url segments
      console.log(this.route.snapshot.url[0]);
      console.log(this.route.snapshot.url[1]); //
    }

    ngOnDestroy() {
      this.inscription.unsubscribe;
    }

}
