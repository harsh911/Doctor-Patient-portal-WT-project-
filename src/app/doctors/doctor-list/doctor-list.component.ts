import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctors.model';
import { DoctorService } from '../doctors.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
   doctor: Doctor[];

  constructor( private doctorservice: DoctorService) { }

  ngOnInit() {
    this.doctor = this.doctorservice.getDoctors();
  }
}
