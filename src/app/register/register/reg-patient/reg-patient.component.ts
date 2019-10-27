


import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PatientsService } from 'src/app/patients/patients.service';
import { NewPatient } from 'src/app/patients/patients.model';

@Component({
  selector: 'app-reg-patient',
  templateUrl: './reg-patient.component.html',
  styleUrls: ['./reg-patient.component.css'],
  providers: [PatientsService]
})
export class RegPatientComponent implements OnInit {
  error: any;
  success: string;

  constructor( private patientService: PatientsService) { }
  newPatient = new NewPatient('Harshad', 'Pednekar', 'male', '30-09-1998', 'mapusa', 'harshped41@gmail.com', 0, 'nothing', 'password', 'password');

  ngOnInit() {
     this.addPatient(String);
  }
  addPatient(f) {
    this.error = '';
    this.success = '';
    console.log("added");
    this.patientService.store(this.newPatient).subscribe(
      (res: NewPatient) => {
        this.newPatient = res;
        this.success = 'Created Successfully';
      },
      (err) => this.error = err
    );
  }

}









// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { PatientsService } from 'src/app/patients/patients.service';
// import { NewPatient } from 'src/app/patients/patients.model';

// @Component({
//   selector: 'app-reg-patient',
//   templateUrl: './reg-patient.component.html',
//   styleUrls: ['./reg-patient.component.css'],
//   providers: [PatientsService]
// })
// export class RegPatientComponent implements OnInit {
//   error: any;
//   success: string;

//   constructor( private patientService: PatientsService) { }
//   patientForm: FormGroup;
//   newPatient = new NewPatient('', '', '', '', '', '', 0, '', '', '');

//   ngOnInit() {
//     this.initForm();
//   }
//   onSubmit() {
//     // this.patientService.addPatient(this.patientForm.value);
//   }

//   private initForm() {
//     let fname = '';
//     let lname = '';
//     let dob = '';
//     let email = '';
//     let phone = '';
//     let pass1= '';
//     let pass2 = '';
//     let gender = '';
//     let addr = '';
//     let image = '';
//     this.patientForm = new FormGroup({
//       fname: new FormControl(fname, Validators.required),
//       lname: new FormControl(lname, Validators.required),
//       dob: new FormControl(dob, Validators.required),
//       email: new FormControl(email, Validators.required),
//       phone: new FormControl(phone, Validators.required),
//       gender: new FormControl(gender, Validators.required),
//       addr: new FormControl(addr, Validators.required),
//       pass1: new FormControl(pass1, Validators.required),
//       pass2: new FormControl(pass2, Validators.required),
//       image: new FormControl(image, Validators.required)
//     });
//     console.log(this.patientForm);

//   }

//   addPatient() {
//     this.error = '';
//     this.success = '';

//     this.patientService.store(this.newPatient).subscribe(
//       (res: NewPatient) => {
//         this.newPatient = res;
//         this.success = 'Created Successfully';
//       },
//       (err) => this.error = err
//     );
//   }

// }

