import { Component, OnInit, Input } from '@angular/core';
import { Patient } from '../../patients.model';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  @Input() index: number;
  @Input() patient: Patient;

  constructor() { }

  ngOnInit() {
  }

}
