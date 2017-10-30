import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { SchoolClassService } from './school-class.service';
import { SchoolClass } from './school-class';

@Component({
  selector: 'app-school-class',
  templateUrl: './school-class.component.html',
  styleUrls: ['./school-class.component.css']
})
export class SchoolClassComponent implements OnInit {

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
