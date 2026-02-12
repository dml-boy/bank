import { Component } from '@angular/core';
import { 
  IonContent, IonButton, ModalController 
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-failed-transfer-modal',
  templateUrl: './failed-transfer-modal.component.html',
  styleUrls: ['./failed-transfer-modal.component.scss'],
  standalone: true,
  imports: [IonContent, IonButton, CommonModule]
})
export class FailedTransferModalComponent {
  constructor(private modalCtrl: ModalController) {}

  dismiss() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  repeat() {
    this.modalCtrl.dismiss(null, 'repeat');
  }
}
