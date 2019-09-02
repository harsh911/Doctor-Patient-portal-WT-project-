import { Component, OnInit, Input } from '@angular/core';
import { Doctor } from '../doctors.model';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {
  @Input() doctor: Doctor;
  constructor() { }

  ngOnInit() {
  }

  onSelected(){
    //
  }

}
