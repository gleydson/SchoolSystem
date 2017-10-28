import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { SchoolClassService } from '../school-class.service';
import { SchoolClass } from '../school-class';

@Component({
  selector: 'app-school-class-show',
  templateUrl: './school-class-show.component.html',
  styleUrls: ['./school-class-show.component.css']
})
export class SchoolClassShowComponent implements OnInit, OnDestroy {

  listSchoolClass : SchoolClass[];
  inscription : Subscription;

  constructor (
    private schoolClassService : SchoolClassService
  ) { }

  ngOnInit() {
    this.inscription = this.schoolClassService.getAll()
    .subscribe (
      (data) => {this.listSchoolClass = data}
    );
  }

  ngOnDestroy() {
    this.inscription.unsubscribe;
  }

}