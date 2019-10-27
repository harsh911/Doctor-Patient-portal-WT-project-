import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-reg-doctor',
  templateUrl: './reg-doctor.component.html',
  styleUrls: ['./reg-doctor.component.css']
})
export class RegDoctorComponent implements OnInit {
  DoctorForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }
  private initForm() {
        let fname = '';
        let lname = '';
        let dob = '';
        let email = '';
        let phone = '';
        let pass1= '';
        let pass2 = '';
        let gender = '';
        let address = '';
        let image = '';
        let office = '';
        let specialization = '';
        this.DoctorForm = new FormGroup({
          fname: new FormControl(fname, Validators.required),
          lname: new FormControl(lname, Validators.required),
          dob: new FormControl(dob, Validators.required),
          email: new FormControl(email, Validators.required),
          phone: new FormControl(phone, Validators.required),
          gender: new FormControl(gender, Validators.required),
          address: new FormControl(address, Validators.required),
          pass1: new FormControl(pass1, Validators.required),
          pass2: new FormControl(pass2, Validators.required),
          image: new FormControl(image, Validators.required),
          specialization: new FormControl(specialization, Validators.required),
          office: new FormControl(office, Validators.required)
        });
        console.log(this.DoctorForm);

      }

  onSubmit() {

  }
}
