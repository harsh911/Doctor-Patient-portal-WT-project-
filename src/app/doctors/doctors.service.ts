import { Injectable } from '@angular/core';
import { Subject, Observable, throwError } from 'rxjs';
import { Doctor } from './doctors.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class DoctorService {
    doctorSelected = new Subject<Doctor>();
    doctorChanged = new Subject<Doctor>();
    baseUrl = 'http://localhost/api';


    newDoctor = new Doctor('1', 'Ryan', 'Mello', 34, ['Surgeon', 'Cardeologist'], ['91-Street,Margao'], 'Aldona', 9898989889, 'https://myblue.bluecrossma.com/sites/g/files/csphws1461/files/inline-images/Doctor%20Image%20Desktop.png');
    private doctors: Doctor[]= [
      new Doctor('1', 'Ryan', 'Mello', 34, ['Surgeon', 'Cardeologist'], ['91-Street,Margao'], 'Aldona', 9898989889, 'https://myblue.bluecrossma.com/sites/g/files/csphws1461/files/inline-images/Doctor%20Image%20Desktop.png'),
      new Doctor('2', 'Shaun', 'Mello', 54, ['Cardeologist'], ['18 June-Street,Panjim'], 'Porvorim', 9898345889, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNBmYOXOSuTes0Xpc7GPICQeg4KijVB5JzhA9Xay68lk9gs96cnw'),
      new Doctor('3', 'Ryan', 'Mello', 34, ['Surgeon', 'Cardeologist'], ['91-Street,Margao'], 'Aldona', 9898989889, 'https://myblue.bluecrossma.com/sites/g/files/csphws1461/files/inline-images/Doctor%20Image%20Desktop.png'),
      new Doctor('4', 'Shaun', 'Mello', 54, ['Cardeologist'], ['18 June-Street,Panjim'], 'Porvorim', 9898345889, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNBmYOXOSuTes0Xpc7GPICQeg4KijVB5JzhA9Xay68lk9gs96cnw'),
      new Doctor('5', 'Ryan', 'Mello', 34, ['Surgeon', 'Cardeologist'], ['91-Street,Margao'], 'Aldona', 9898989889, 'https://myblue.bluecrossma.com/sites/g/files/csphws1461/files/inline-images/Doctor%20Image%20Desktop.png'),
      new Doctor('6', 'Shaun', 'Mello', 54, ['Cardeologist'], ['18 June-Street,Panjim'], 'Porvorim', 9898345889, 'https://myblue.bluecrossma.com/sites/g/files/csphws1461/files/inline-images/Doctor%20Image%20Desktop.png'),
    ];

    constructor(private http: HttpClient) {}

    getDoctors() {
      this.getAllDoctors();
      return this.doctors.slice();
    }
    getDoctor(id: number) {
      this.getAllDoctors();
      return this.doctors[id];
    }

    getAllDoctors(): Observable<Doctor[]> {
      return this.http.get(`${this.baseUrl}/doctorList`).pipe(
        map((res) => {
          this.doctors = res['data'];
          console.log(this.doctors);
          return this.doctors;
      }),
      catchError(this.handleError));
    }

    store(newDoctor: Doctor): Observable<Doctor> {
      return this.http.post(`${this.baseUrl}/storeDoctors`, { data: newDoctor })
      .pipe(map((res) => {
         this.doctors.push(res['data']);
        return this.newDoctor;
      }),
      catchError(this.handleError));
    }
    private handleError(error: HttpErrorResponse) {
      console.log(error);
      return throwError('Error! something went wrong.');
    }


}
