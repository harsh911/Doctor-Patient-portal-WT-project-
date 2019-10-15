import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  tab = 'doctor';

  title = 'wtproject';

  onNavigate(nav: string) {
     this.tab = nav;
  }

}
