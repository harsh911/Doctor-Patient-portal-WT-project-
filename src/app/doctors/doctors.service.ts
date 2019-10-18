import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Doctor } from './doctors.model';

@Injectable()
export class DoctorService {
    doctorSelected = new Subject<Doctor>();
    doctorChanged = new Subject<Doctor>();

    private doctors: Doctor[] = [
      new Doctor('1', 'Ryan Mello', 34, ['Surgeon', 'Cardeologist'], ['91-Street,Margao'], 'Aldona', 9898989889, 'https://myblue.bluecrossma.com/sites/g/files/csphws1461/files/inline-images/Doctor%20Image%20Desktop.png'),
      new Doctor('2', 'Shaun Mello', 54, ['Cardeologist'], ['18 June-Street,Panjim'], 'Porvorim', 9898345889, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNBmYOXOSuTes0Xpc7GPICQeg4KijVB5JzhA9Xay68lk9gs96cnw'),
      new Doctor('3', 'Ryan Mello', 34, ['Surgeon', 'Cardeologist'], ['91-Street,Margao'], 'Aldona', 9898989889, 'https://myblue.bluecrossma.com/sites/g/files/csphws1461/files/inline-images/Doctor%20Image%20Desktop.png'),
      new Doctor('4', 'Shaun Mello', 54, ['Cardeologist'], ['18 June-Street,Panjim'], 'Porvorim', 9898345889, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNBmYOXOSuTes0Xpc7GPICQeg4KijVB5JzhA9Xay68lk9gs96cnw'),
      new Doctor('5', 'Ryan Mello', 34, ['Surgeon', 'Cardeologist'], ['91-Street,Margao'], 'Aldona', 9898989889, 'https://myblue.bluecrossma.com/sites/g/files/csphws1461/files/inline-images/Doctor%20Image%20Desktop.png'),
      new Doctor('6', 'Shaun Mello', 54, ['Cardeologist'], ['18 June-Street,Panjim'], 'Porvorim', 9898345889, 'https://myblue.bluecrossma.com/sites/g/files/csphws1461/files/inline-images/Doctor%20Image%20Desktop.png'),
    ];

    constructor() {}

    getDoctors() {
      return this.doctors.slice();
    }
    getDoctor(id: number) {
      return this.doctors[id];
    }

}
