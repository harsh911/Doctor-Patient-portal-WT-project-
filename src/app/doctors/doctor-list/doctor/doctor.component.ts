import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Doctor } from '../../doctors.model';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  @Input() index: number;
  @Input() doctor: Doctor;
  constructor() { }

  ngOnInit() {
  }

}

