import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolClassBreadcrumbsComponent } from './school-class-breadcrumbs.component';

describe('SchoolClassBreadcrumbsComponent', () => {
  let component: SchoolClassBreadcrumbsComponent;
  let fixture: ComponentFixture<SchoolClassBreadcrumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolClassBreadcrumbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolClassBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
