import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connacht',
  templateUrl: './connacht.page.html',
  styleUrls: ['./connacht.page.scss'],
})
export class ConnachtPage implements OnInit {
  counties:string[]=["Sligo","Galway","Roscommon","Mayo","Leithrim"];
  constructor() { }

  ngOnInit() {
  }

}
