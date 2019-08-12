import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {
  @Input() room: any;
  request: object = {};
  constructor(public alertController: AlertController, public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  sendRequest() {
    this.room.request = this.request;
    debugger;
    this.modalCtrl.dismiss(this.room);
  }

  handleValue($event, type) {

    switch (type) {
      case "requester":
        this.request["requester"] = $event.detail.value
        break;
      case "titleEvent":
        this.request["titleEvent"] = $event.detail.value
        break;
      case "teacher":
        this.request["teacher"] = $event.detail.value
        break;
      case "publicWorker":
        this.request["publicWorker"] = $event.detail.value
        break;
      case "category":
        this.request["category"] = $event.detail.value
        break;
      case "nature":
        this.request["nature"] = $event.detail.value
        break;
      case "proposal":
        this.request["proposal"] = $event.detail.value
        break;
      case "estimatedPublic":
        this.request["estimatedPublic"] = $event.detail.value
        break;
      case "contacts":
        this.request["contacts"] = $event.detail.value
        break;
    }
  }
}
