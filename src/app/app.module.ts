import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppointmentComponent } from './appointments/appointment/appointment.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { DetailsComponent } from './medical/details/details.component';
import { DoctorListComponent } from './doctors/doctor-list/doctor-list.component';
import { RegisterComponent } from './register/register/register.component';
import { LoginComponent } from './register/login/login.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { TabsComponent } from './tabs/tabs/tabs.component';
import { ContentComponent } from './content/content/content.component';
import { RegDoctorComponent } from './register/register/reg-doctor/reg-doctor.component';
import { RegPatientComponent } from './register/register/reg-patient/reg-patient.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { DoctorDetailsComponent } from './doctors/doctor-details/doctor-details.component';
import { DoctorComponent } from './doctors/doctor-list/doctor/doctor.component';

import { ViewAppointmentsComponent } from './appointments/view-appointments/view-appointments.component';
import { AppRoutingModule } from './app-routing.module';
import { PatientsComponent } from './patients/patients.component';
import { PatientListComponent } from './patients/patient-list/patient-list.component';
import { PatientComponent } from './patients/patient-list/patient/patient.component';
import { PatientDetailsComponent } from './patients/patient-details/patient-details.component';


@NgModule({
  declarations: [
    AppComponent,
    AppointmentComponent,
    AppointmentsComponent,
    DetailsComponent,
    DoctorListComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    TabsComponent,
    ContentComponent,
    RegDoctorComponent,
    RegPatientComponent,
    DoctorsComponent,
    DoctorDetailsComponent,
    DoctorComponent,
    ViewAppointmentsComponent,
    PatientsComponent,
    PatientListComponent,
    PatientComponent,
    PatientDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
