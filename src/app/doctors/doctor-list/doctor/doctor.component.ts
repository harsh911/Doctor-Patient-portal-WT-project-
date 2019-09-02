import { Component, OnInit, Input } from '@angular/core';
import { Doctor } from '../../doctors.model';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  @Input() doctor: Doctor;
  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    //
  }
}

