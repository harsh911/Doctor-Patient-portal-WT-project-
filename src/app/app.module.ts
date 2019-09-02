import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppointmentComponent } from './appointments/appointment/appointment.component';
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

@NgModule({
  declarations: [
    AppComponent,
    AppointmentComponent,
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
    DoctorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
