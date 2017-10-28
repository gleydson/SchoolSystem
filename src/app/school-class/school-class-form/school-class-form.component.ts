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
  id : number;
  inscription : Subscription;

  constructor(
    private schoolClassService : SchoolClassService,
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.inscription = this.route.params.subscribe(
      (params : any) => {
        this.id = params['id'];
        console.log(this.id);
        this.schoolClass = this.schoolClassService.read(this.id);

        if (this.schoolClass == null) this.router.navigate(['/school-class-not-found']);
      }
    )
  }

  ngOnDestroy() {
    this.inscription.unsubscribe;
  }
}
