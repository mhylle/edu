import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PatientsRoutingModule} from './patients-routing.module';
import { PatientComponent } from './patient/patient.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { ListPatientsComponent } from './list-patients/list-patients.component';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import {CommonModule} from '@angular/common';
import {PatientService} from './services/patient.service';
import { PatientSearchResultComponent } from './list-patients/patient-search-result/patient-search-result.component';

@NgModule({
  declarations: [
    PatientComponent,
    CreatePatientComponent,
    ListPatientsComponent,
    PatientSearchResultComponent
  ],
  imports: [PatientsRoutingModule, RouterModule, SharedModule, CommonModule],
  exports: [
    PatientComponent
  ],
  providers: [PatientService],
})
export class PatientsModule {
}
