import { Component, OnInit, Input } from '@angular/core';
import { Patient } from '../patients.model';
import { PatientsService } from '../patients.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
   @Input() patient: Patient;
   id: number;

  constructor(private patientService: PatientsService,
              private route: ActivatedRoute,
              private router: Router) {  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.patient = this.patientService.getPatient(this.id);
    });
  }

}
