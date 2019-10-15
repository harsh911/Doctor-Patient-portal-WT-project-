import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor() { }
  illness = ['Asthama', 'Liver', 'Heart', 'Anemia', 'Arthritis', 'Cancer', 'Gout', 'Diabetes', 'Emotional Disorder', 'Epilepsy Seizures',
  'Fainting Spells', 'Gallstones', 'Heart Disease', 'Heart Attack', 'Rheumatic Fever', 'High Blood Pressure', 'Digestive Problems',
  'Ulcerative Colitis', 'Ulcer Disease', 'Hepatitis', 'Kidney Disease', 'Liver Disease', 'Sleep Apnea',
  'Use a C-PAP machine', 'Thyroid Problems', 'Tuberculosis', 'Venereal Disease', 'Neurological Disorders', 'Bleeding Disorders',
  'Lung Disease', 'Emphysema'];
  ngOnInit() {
  }

}
