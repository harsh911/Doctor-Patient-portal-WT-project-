import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Doctor } from '../doctors.model';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  @Output() Selected  = new EventEmitter<Doctor>();

  @Input() doctors: Doctor[] = [
    new Doctor('1', 'Ryan Mello', 34, ['Surgeon', 'Cardeologist'], ['91-Street,Margao'], 'Aldona', 9898989889, 'https://myblue.bluecrossma.com/sites/g/files/csphws1461/files/inline-images/Doctor%20Image%20Desktop.png'),
    new Doctor('2', 'Shaun Mello', 54, ['Cardeologist'], ['18 June-Street,Panjim'], 'Porvorim', 9898345889, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNBmYOXOSuTes0Xpc7GPICQeg4KijVB5JzhA9Xay68lk9gs96cnw'),
    new Doctor('1', 'Ryan Mello', 34, ['Surgeon', 'Cardeologist'], ['91-Street,Margao'], 'Aldona', 9898989889, 'https://myblue.bluecrossma.com/sites/g/files/csphws1461/files/inline-images/Doctor%20Image%20Desktop.png'),
    new Doctor('2', 'Shaun Mello', 54, ['Cardeologist'], ['18 June-Street,Panjim'], 'Porvorim', 9898345889, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNBmYOXOSuTes0Xpc7GPICQeg4KijVB5JzhA9Xay68lk9gs96cnw'),
    new Doctor('1', 'Ryan Mello', 34, ['Surgeon', 'Cardeologist'], ['91-Street,Margao'], 'Aldona', 9898989889, 'https://myblue.bluecrossma.com/sites/g/files/csphws1461/files/inline-images/Doctor%20Image%20Desktop.png'),
    new Doctor('2', 'Shaun Mello', 54, ['Cardeologist'], ['18 June-Street,Panjim'], 'Porvorim', 9898345889, 'https://myblue.bluecrossma.com/sites/g/files/csphws1461/files/inline-images/Doctor%20Image%20Desktop.png'),
  ];
  constructor() { }

  ngOnInit() {
  }
  selectedDoctor(doc: Doctor) {
    this.Selected.emit(doc);
  }
}
