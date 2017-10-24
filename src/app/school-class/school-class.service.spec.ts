/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SchoolClassService } from './school-class.service';

describe('SchoolClassService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchoolClassService]
    });
  });

  it('should ...', inject([SchoolClassService], (service: SchoolClassService) => {
    expect(service).toBeTruthy();
  }));
});
