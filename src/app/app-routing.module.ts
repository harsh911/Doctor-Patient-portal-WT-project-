import { AppointmentComponent } from './appointments/appointment/appointment.component';
import { DetailsComponent } from './medical/details/details.component';
import { LoginComponent } from './register/login/login.component';
import { ContentComponent } from './content/content/content.component';
import { RegDoctorComponent } from './register/register/reg-doctor/reg-doctor.component';
import { RegPatientComponent } from './register/register/reg-patient/reg-patient.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { DoctorDetailsComponent } from './doctors/doctor-details/doctor-details.component';

import { ViewAppointmentsComponent } from './appointments/view-appointments/view-appointments.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppointmentsComponent } from './appointments/appointments.component';


const appRoutes: Routes = [
  {path: '', component: ContentComponent },
  {path: 'login', component: LoginComponent },
  {path: 'register/doctor', component: RegDoctorComponent },
  {path: 'register/patient', component: RegPatientComponent },
  {path: 'doctors', component: DoctorsComponent, children: [
    {path: ':id', component: DoctorDetailsComponent },
  ]},
  {path: 'appointments', component: AppointmentsComponent , children: [
    {path: ':id', component: AppointmentComponent },
  ]},
  {path: 'medical', component: DetailsComponent },
  {path: 'all-appointments', component: ViewAppointmentsComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}

