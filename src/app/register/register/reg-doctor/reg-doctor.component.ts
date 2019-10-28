import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-reg-doctor',
  templateUrl: './reg-doctor.component.html',
  styleUrls: ['./reg-doctor.component.css']
})
export class RegDoctorComponent implements OnInit {
  DoctorForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.initForm();
  }
  private initForm() {
        const fname = '';
        const lname = '';
        const dob = '';
        const email = 'harsh@gmail.com';
        const phone = '';
        const pass1 = '';
        const pass2 = '';
        const gender = '';
        const address = '';
        const image = '';
        const offices = new FormArray([]);
        const specializations = new FormArray([]);
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
          'specializations': specializations,
          'offices': offices
        });
        this.onAddSpecial();
        this.onAddOffice();
        console.log(this.DoctorForm);

      }
      getSPControls() {
        return (this.DoctorForm.get('specializations') as FormArray).controls;
      }
      onAddSpecial() {
        ( this.DoctorForm.get('specializations') as FormArray).push(
          new FormGroup({
            type: new FormControl(null, Validators.required)
          })
        );
      }

      getOfficeControls() {
        return (this.DoctorForm.get('offices') as FormArray).controls;
      }
      onAddOffice() {
        ( this.DoctorForm.get('offices') as FormArray).push(
          new FormGroup({
            place: new FormControl(null, Validators.required)
          })
        );
      }

      // onDelete(index: number) {
      //   ( this.DoctorForm.get('specialization') as FormArray).removeAt(index);
      // }

  onSubmit() {
    console.log(this.DoctorForm);

  }
}
