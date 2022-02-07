import { Component, OnInit } from '@angular/core';
import {PatientService} from '../services/patient.service';
import {Observable} from 'rxjs';
import {Patient} from '../model/patient.model';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css']
})
export class ListPatientsComponent implements OnInit {
  public searchResult$?: Observable<Patient[]>;
  public name?: string;

  constructor(private readonly patientService: PatientService) { }

  ngOnInit(): void {
  }

  search() {
    this.searchResult$ = this.patientService.search(this.name);
  }
}
