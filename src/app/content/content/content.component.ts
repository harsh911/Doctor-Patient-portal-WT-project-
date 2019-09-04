import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  elements = [{ title: 'Medical', imagePath: 'https://myblue.bluecrossma.com/sites/g/files/csphws1461/files/inline-images/Doctor%20Image%20Desktop.png'},
  { title: 'History', imagePath: 'https://myblue.bluecrossma.com/sites/g/files/csphws1461/files/inline-images/Doctor%20Image%20Desktop.png'},
  { title: 'Appointments', imagePath: 'https://myblue.bluecrossma.com/sites/g/files/csphws1461/files/inline-images/Doctor%20Image%20Desktop.png'},
  { title: 'EditDetails', imagePath: 'https://myblue.bluecrossma.com/sites/g/files/csphws1461/files/inline-images/Doctor%20Image%20Desktop.png'}];

  constructor() { }

  ngOnInit() {
  }

}
