import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { SchoolClassService } from '../school-class.service';
import { SchoolClass } from '../school-class';

@Component({
  selector: 'app-school-class-home',
  templateUrl: './school-class-home.component.html',
  styleUrls: ['./school-class-home.component.css']
})
export class SchoolClassHomeComponent implements OnInit {

  listSchoolClass : SchoolClass[];
  inscription : Subscription;

  constructor (
    private schoolClassService : SchoolClassService,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    /*this.inscription = this.schoolClassService.getAll()
    .subscribe (
      (data) => {this.listSchoolClass = data}
    );*/
    this.listSchoolClass = this.schoolClassService.getAll();
  }

  ngOnDestroy() {
    this.inscription.unsubscribe;
  }
  
}