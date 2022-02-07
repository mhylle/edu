import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientSearchResultComponent } from './patient-search-result.component';

describe('PatientSearchResultComponent', () => {
  let component: PatientSearchResultComponent;
  let fixture: ComponentFixture<PatientSearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientSearchResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
