import { Component, OnInit } from '@angular/core';
import { PatientsService } from '.././patients.service';
import { Patient } from '.././patients.model';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patient: Patient[];
  error = '';
  success = '';

  constructor(private patientService: PatientsService) { }

  ngOnInit() {
    this.patient = this.patientService.getPatients();
    this.getPatients();
  }

  getPatients(): void {
    this.patientService.getAllPatients().subscribe(
      (res: Patient[]) => {
        this.patient = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }
}
