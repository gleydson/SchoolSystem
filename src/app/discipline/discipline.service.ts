import { AnnualNotesService } from './../annual-notes/annual-notes.service';
import { Injectable } from '@angular/core';

import { Discipline } from './discipline';
import { AnnualNotes } from './../annual-notes/annual-notes';

@Injectable()
export class DisciplineService {

  private listDisciplines : Discipline[] = [
    new Discipline(1, "Matemática", null),
    new Discipline(2, "História", null),
    new Discipline(3, "Lingua Inglesa", null)
  ];

  constructor(
    private annualNotesService : AnnualNotesService
  ) { }

}
