import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { SchoolClassService } from '../school-class.service';
import { SchoolClass } from '../school-class';

@Component({
  selector: 'app-school-class-show',
  templateUrl: './school-class-show.component.html',
  styleUrls: ['./school-class-show.component.css']
})
export class SchoolClassShowComponent implements OnInit {

  listSchoolClass : SchoolClass[];
  //inscription : Subscription;

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
    //this.inscription.unsubscribe;
  }

}