import { Component, OnInit, Input } from '@angular/core';
import { Doctor } from '../doctors.model';
import { DoctorService } from '../doctors.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {
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
