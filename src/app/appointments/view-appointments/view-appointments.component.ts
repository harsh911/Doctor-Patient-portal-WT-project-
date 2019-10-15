import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-appointments',
  templateUrl: './view-appointments.component.html',
  styleUrls: ['./view-appointments.component.css']
})
export class ViewAppointmentsComponent implements OnInit {

  constructor() { }
  appointments = [
    {doctor: 'Shaun', date: '23/04/2018', time: '03:30', office: 'Mapusa'},
    {doctor: 'John', date: '23/04/2018', time: '03:30', office: 'Mapusa'},
    {doctor: 'Suraj', date: '23/04/2018', time: '03:30', office: 'Mapusa'},
    {doctor: 'Godekar', date: '23/04/2018', time: '03:30', office: 'Mapusa'},
    {doctor: 'Kelvin', date: '23/04/2018', time: '03:30', office: 'Mapusa'},
    {doctor: 'Prabudesai', date: '23/04/2018', time: '03:30', office: 'Mapusa'}

  ];
  ngOnInit() {
  }

}
