import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {Patient} from '../model/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private readonly http: HttpClient) { }

  get patients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${environment.apiUrl}/patients`);
  }

  create(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(`${environment.apiUrl}/patients`, patient);
  }

  search(name: string | undefined) {
    return this.http.get<Patient[]>(`${environment.apiUrl}/patients?name=${name}`);
  }
}
