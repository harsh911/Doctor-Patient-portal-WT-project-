import { Component, OnInit, Input } from '@angular/core';
import { Doctor } from 'src/app/doctors/doctors.model';
import { DoctorService } from 'src/app/doctors/doctors.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  @Input() doctor: Doctor;
  id: number;

  constructor( private docService: DoctorService,
               private route: ActivatedRoute,
               private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.doctor = this.docService.getDoctor(this.id);
    });
  }

}
