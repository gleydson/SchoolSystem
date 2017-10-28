import { TestBed, inject } from '@angular/core/testing';

import { AnnualNotesService } from './annual-notes.service';

describe('AnnualNotesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnnualNotesService]
    });
  });

  it('should be created', inject([AnnualNotesService], (service: AnnualNotesService) => {
    expect(service).toBeTruthy();
  }));
});
