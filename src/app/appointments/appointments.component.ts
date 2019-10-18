
import { Component, OnInit, Input } from '@angular/core';

import { Doctor } from '../doctors/doctors.model';
import { DoctorService } from '../doctors/doctors.service';
@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css'],
  providers: [DoctorService]
})
export class AppointmentsComponent implements OnInit {

  @Input() doctorChosen: Doctor;
  doctor: Doctor[];

  constructor( private doctorservice: DoctorService) { }

  ngOnInit() {
    this.doctor = this.doctorservice.getDoctors();
    this.doctorservice.doctorSelected
    .subscribe((doctor: Doctor) => {
      this.doctorChosen = doctor;
    });
  }

}
