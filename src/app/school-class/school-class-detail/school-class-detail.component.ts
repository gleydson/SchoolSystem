import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { SchoolClassService } from '../school-class.service';
import { SchoolClass } from '../school-class';

@Component({
  selector: 'app-school-class-detail',
  templateUrl: './school-class-detail.component.html',
  styleUrls: ['./school-class-detail.component.css']
})
export class SchoolClassDetailComponent implements OnInit, OnDestroy {

  schoolClass : any;
  id : number;
  inscription : Subscription;

  constructor (
    private schoolClassService : SchoolClassService,
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.inscription = this.route.params.subscribe(
      (params : any) => {
        this.id = params['id'];
        this.schoolClass = this.schoolClassService.read(this.id);

        if (this.schoolClass == null || this.schoolClass === null) this.router.navigate(['/school-class-not-found']);
      }
    )
  }

  edit() {
    this.router.navigate(['/school-class', this.schoolClass.id, 'edit'])
  }

  ngOnDestroy() {
    this.inscription.unsubscribe;
  }

}
