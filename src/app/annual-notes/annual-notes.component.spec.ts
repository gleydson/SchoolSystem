import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualNotesComponent } from './annual-notes.component';

describe('AnnualNotesComponent', () => {
  let component: AnnualNotesComponent;
  let fixture: ComponentFixture<AnnualNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnualNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
