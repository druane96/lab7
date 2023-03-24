import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-leinster',
  templateUrl: './leinster.page.html',
  styleUrls: ['./leinster.page.scss'],
})
export class LeinsterPage implements OnInit {
  onButtonClick(){
    this.navCtrl.navigateForward('/leinstercounties');
  }

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

}
