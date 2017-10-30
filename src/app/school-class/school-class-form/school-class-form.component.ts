import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { SchoolClassService } from '../school-class.service';
import { SchoolClass } from '../school-class';
import { toast } from 'angular2-materialize';

@Component({
  selector: 'app-school-class-form',
  templateUrl: './school-class-form.component.html',
  styleUrls: ['./school-class-form.component.css']
})
export class SchoolClassFormComponent implements OnInit, OnDestroy {

  schoolClass: SchoolClass;
  inscriptionOne: Subscription;
  inscriptionTwo: Subscription;
  inscriptionTree: Subscription;

  constructor (
    private schoolClassService: SchoolClassService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.inscriptionOne = new Subscription();
    this.inscriptionTwo = new Subscription();
    this.inscriptionTree = new Subscription();
  }

  edit() {
    this.schoolClassService.update(this.schoolClass).subscribe(
      (data) => {
        this.router.navigate(['/school-class'])
      }
    );
  }

  create() {
    this.schoolClassService.create(this.schoolClass).subscribe(
      (data) => {
        toast('Turma criada com sucesso!', 4000),
        this.router.navigate(['/school-class'])
      }
    );
  }

  ngOnInit() {
    this.inscriptionOne = this.route.params.subscribe(
      (params: any) => {
        if (params['id'] != null) {
          this.inscriptionTwo = this.schoolClassService.read(params['id']).subscribe(
            (data) => this.schoolClass = data
          );
        } else this.schoolClass = new SchoolClass("", 0);
      }
    );
  }

  ngOnDestroy() {
    this.inscriptionOne.unsubscribe;
    this.inscriptionTwo.unsubscribe;
    this.inscriptionTree.unsubscribe;
  }

}
