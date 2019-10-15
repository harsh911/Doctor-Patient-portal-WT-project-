import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  elements = [{ title: 'Medical', imagePath: 'https://accelerator-origin.kkomando.com/wp-content/uploads/2016/01/medical-records.jpg', link: '/medical'},
  { title: 'Doctors', imagePath: 'https://p7.hiclipart.com/preview/162/230/346/cartoon-physician-drawing-the-bearded-doctor.jpg', link: '/doctors'},
  { title: 'Appointments', imagePath: 'https://denverseniorcare.com/wp-content/uploads/2018/10/4-Details-to-Remember-for-Medical-Appointment-Success.png', link: '/appointments'},
  { title: 'EditDetails', imagePath: 'https://www.connectedgeek.net/connectedgeek-net/wp-content/uploads/2018/09/698873-icon-136-document-edit-512.png', link: '/register/patient'}];

  constructor() { }

  ngOnInit() {
  }

}
