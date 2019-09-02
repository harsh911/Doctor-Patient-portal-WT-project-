import { Component, OnInit } from '@angular/core';
import { Doctor } from './doctors.model';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  doctor: Doctor;
  constructor() { }

  ngOnInit() {
  }

}
