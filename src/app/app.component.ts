import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'wtproject';
  elements = [{ title: 'Medical'},
  { title: 'History'},
  { title: 'Appointments'},
  { title: 'EditDetails'}];

}
