import { Component, OnInit, Input } from '@angular/core';
import { Doctor } from '../doctors.model';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  @Input() doctors: Doctor[] = [
    new Doctor('1', 'Ryan Mello', 34, ['Surgeon', 'Cardeologist'], ['91-Street,Margao'], 'Aldona', 9898989889, 'https://myblue.bluecrossma.com/sites/g/files/csphws1461/files/inline-images/Doctor%20Image%20Desktop.png'),
    new Doctor('2', 'Shaun Mello', 54, ['Cardeologist'], ['18 June-Street,Panjim'], 'Porvorim', 9898345889, 'https://myblue.bluecrossma.com/sites/g/files/csphws1461/files/inline-images/Doctor%20Image%20Desktop.png'),
    new Doctor('1', 'Ryan Mello', 34, ['Surgeon', 'Cardeologist'], ['91-Street,Margao'], 'Aldona', 9898989889, 'https://myblue.bluecrossma.com/sites/g/files/csphws1461/files/inline-images/Doctor%20Image%20Desktop.png'),
    new Doctor('2', 'Shaun Mello', 54, ['Cardeologist'], ['18 June-Street,Panjim'], 'Porvorim', 9898345889, 'https://myblue.bluecrossma.com/sites/g/files/csphws1461/files/inline-images/Doctor%20Image%20Desktop.png'),
    new Doctor('1', 'Ryan Mello', 34, ['Surgeon', 'Cardeologist'], ['91-Street,Margao'], 'Aldona', 9898989889, 'https://myblue.bluecrossma.com/sites/g/files/csphws1461/files/inline-images/Doctor%20Image%20Desktop.png'),
    new Doctor('2', 'Shaun Mello', 54, ['Cardeologist'], ['18 June-Street,Panjim'], 'Porvorim', 9898345889, 'https://myblue.bluecrossma.com/sites/g/files/csphws1461/files/inline-images/Doctor%20Image%20Desktop.png'),
  ];
  constructor() { }

  ngOnInit() {
  }
}
