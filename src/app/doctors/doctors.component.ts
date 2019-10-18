import { Component, OnInit, Input } from '@angular/core';
import { Doctor } from './doctors.model';
import { DoctorService } from './doctors.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css'],
  providers: [DoctorService]
})
export class DoctorsComponent implements OnInit {
  @Input() doctorChosen: Doctor;
  constructor(private doctorService: DoctorService) { }

  ngOnInit() {
    this.doctorService.doctorSelected
    .subscribe((doctor: Doctor) => {
      this.doctorChosen = doctor;
    });
  }
}
