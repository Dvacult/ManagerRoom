import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {
  @Input() room: any;
  constructor(public alertController: AlertController,public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  request(room){
    this.modalCtrl.dismiss(room);
  }

}
