import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  medForm: FormGroup;
  constructor() { }
  illnesses = ['Asthama', 'Liver', 'Heart', 'Anemia', 'Arthritis', 'Cancer', 'Gout', 'Diabetes', 'Emotional Disorder', 'Epilepsy Seizures',
  'Fainting Spells', 'Gallstones', 'Heart Disease', 'Heart Attack', 'Rheumatic Fever', 'High Blood Pressure', 'Digestive Problems',
  'Ulcerative Colitis', 'Ulcer Disease', 'Hepatitis', 'Kidney Disease', 'Liver Disease', 'Sleep Apnea',
  'Use a C-PAP machine', 'Thyroid Problems', 'Tuberculosis', 'Venereal Disease', 'Neurological Disorders', 'Bleeding Disorders',
  'Lung Disease', 'Emphysema'];
  ngOnInit() {
    this.initForm();
  }

  initForm() {
    const height = '';
    const weight = '';
    const diet = '';
    const alcohol = '';
    const smoke = '';
    const comments = '';
    const exercise = '';
    const allergies = new FormArray([]);
    const illness = new FormArray([]);
    const operations = new FormArray([]);
    const medications = new FormArray([]);

    this.medForm = new FormGroup({
      height: new FormControl(height, Validators.required),
      weight: new FormControl(weight, Validators.required),
      diet: new FormControl(diet, Validators.required),
      alcohol: new FormControl(alcohol, Validators.required),
      smoke: new FormControl(smoke, Validators.required),
      comments: new FormControl(comments, Validators.required),
      exercise: new FormControl(exercise, Validators.required),
      'drugAllergies': allergies,
      'medications': medications,
      'operations': operations,
      'illness': illness
    });
    }

  getAllergyControl() {
    return (this.medForm.get('drugAllergies') as FormArray).controls;
  }
  onAddAllergy() {
    ( this.medForm.get('drugAllergies') as FormArray).push(
      new FormGroup({
        allergyName: new FormControl(null, Validators.required)
      })
    );
  }

  getIllnessControl() {
    return (this.medForm.get('illness') as FormArray).controls;
  }
  onAddIllness() {
    ( this.medForm.get('illness') as FormArray).push(
      new FormGroup({
        illnessName: new FormControl(null, Validators.required)
      })
    );
  }

  getOperationControl() {
    return (this.medForm.get('operations') as FormArray).controls;
  }
  onAddOperation() {
    ( this.medForm.get('operations') as FormArray).push(
      new FormGroup({
        operationName: new FormControl(null, Validators.required)
      })
    );
  }

  getMedicationControl() {
    return (this.medForm.get('medications') as FormArray).controls;
  }
  onAddMedication() {
    ( this.medForm.get('medications') as FormArray).push(
      new FormGroup({
        medicationName: new FormControl(null, Validators.required)
      })
    );
  }

  onSubmit() {

  }
}
