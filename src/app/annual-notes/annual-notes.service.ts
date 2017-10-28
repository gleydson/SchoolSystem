import { Injectable } from '@angular/core';

import { AnnualNotes } from './annual-notes';

@Injectable()
export class AnnualNotesService {

  private listAnnualNotes : AnnualNotes[] = [
    new AnnualNotes()
  ];

  constructor() { }

  public getAll() : AnnualNotes[] {
    return this.listAnnualNotes;
  }

}
