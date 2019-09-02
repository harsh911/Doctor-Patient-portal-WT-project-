import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('tab') elements: { title: string, imagePath: string};
  constructor() { }

  ngOnInit() {
  }

}
