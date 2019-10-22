import { Component, OnInit, Input } from '@angular/core';
import { PatientsService } from './patients.service';
import { Patient } from './patients.model';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
  providers: [PatientsService]
})
export class PatientsComponent implements OnInit {
  @Input() patientChosen: Patient;

  constructor(private patientService: PatientsService) { }

  ngOnInit() {
    this.patientService.patientSelected
    .subscribe((patient: Patient) => {
      this.patientChosen = patient;
    });
  }

}
