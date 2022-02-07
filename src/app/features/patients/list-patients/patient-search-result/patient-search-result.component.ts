import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Patient} from '../../model/patient.model';

@Component({
  selector: 'app-patient-search-result',
  templateUrl: './patient-search-result.component.html',
  styleUrls: ['./patient-search-result.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientSearchResultComponent implements OnInit {

  @Input() searchResult?: Patient[];


  constructor() {
  }

  ngOnInit(): void {
  }

  trackByFunction(index: number, patient: Patient) {
    return patient.id;
  }

}
