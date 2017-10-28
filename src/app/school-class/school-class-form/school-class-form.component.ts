import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { SchoolClassService } from '../school-class.service';
import { SchoolClass } from '../school-class';

@Component({
  selector: 'app-school-class-form',
  templateUrl: './school-class-form.component.html',
  styleUrls: ['./school-class-form.component.css']
})
export class SchoolClassFormComponent implements OnInit, OnDestroy {

  schoolClass : SchoolClass;
  inscriptionOne : Subscription;
  inscriptionTwo : Subscription;

  constructor(
    private schoolClassService : SchoolClassService,
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.inscriptionOne = this.route.params.subscribe(
      (params : any) => {
        this.inscriptionTwo = this.schoolClassService.read(params['id']).subscribe(
          (data) => this.schoolClass = data
        );
        if (this.schoolClass == null) this.router.navigate(['/school-class-not-found']);
      }
    )
  }

  ngOnDestroy() {
    this.inscriptionOne.unsubscribe;
    this.inscriptionTwo.unsubscribe;
  }
}
