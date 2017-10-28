import { Injectable } from '@angular/core';

import { Discipline } from './discipline';
import { AnnualNotes } from './../annual-notes/annual-notes';
import { AnnualNotesService } from './../annual-notes/annual-notes.service';

@Injectable()
export class DisciplineService {

  private listDisciplines : Discipline[] = [
    new Discipline("Matemática", null),
    new Discipline("História", null),
    new Discipline("Lingua Inglesa", null)
  ];

  constructor(
    private annualNotesService : AnnualNotesService
  ) { }

}
