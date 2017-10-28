import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolClassShowComponent } from './school-class-show.component';

describe('SchoolClassShowComponent', () => {
  let component: SchoolClassShowComponent;
  let fixture: ComponentFixture<SchoolClassShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolClassShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolClassShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
