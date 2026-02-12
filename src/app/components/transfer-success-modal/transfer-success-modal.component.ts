import { Component } from '@angular/core';
import { IonButton, ModalController } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transfer-success-modal',
  templateUrl: './transfer-success-modal.component.html',
  styleUrls: ['./transfer-success-modal.component.scss'],
  standalone: true,
  imports: [IonButton, CommonModule]
})
export class TransferSuccessModalComponent {
  constructor(private modalCtrl: ModalController) {}

  continue() {
    this.modalCtrl.dismiss(null, 'continue');
  }
}
