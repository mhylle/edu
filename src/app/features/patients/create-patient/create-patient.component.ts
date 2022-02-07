import { Component, OnInit } from '@angular/core';
import {PatientService} from '../services/patient.service';
import {Patient} from '../model/patient.model';
import {PatientComponent} from '../patient/patient.component';
import {map, Observable} from 'rxjs';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {
  patient?: {
    name?: string;
  };

  public createdPatient$?: Observable<Patient>

  constructor(private readonly patientService: PatientService) {
    this.patient = {
      name: ''
    };
  }

  ngOnInit(): void {
  }

  createPatient() {
    console.log(this.patient);
    if (this.patient && this.patient.name) {
      const patient: Patient = {
        name: this.patient.name
      }
      this.createdPatient$ = this.patientService.create(patient).pipe(map(p => {
        p.age = Math.random() * 100;
        return p;
      }));
    }
  }
}
