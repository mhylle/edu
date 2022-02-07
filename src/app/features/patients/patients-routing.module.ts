import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PatientComponent} from './patient/patient.component';
import {CreatePatientComponent} from './create-patient/create-patient.component';
import {ListPatientsComponent} from './list-patients/list-patients.component';

const routes: Routes = [
  {
    path: '',
    component: PatientComponent,
    children: [
      {
        path: 'create',
        component: CreatePatientComponent
      },
      {
        path: 'list',
        component: ListPatientsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: [],
  providers: [],
})
export class PatientsRoutingModule {
}
