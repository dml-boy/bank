import { Component } from '@angular/core';
import { IonButton, ModalController } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-request-success-modal',
  templateUrl: './request-success-modal.component.html',
  styleUrls: ['./request-success-modal.component.scss'],
  standalone: true,
  imports: [IonButton, CommonModule]
})
export class RequestSuccessModalComponent {
  constructor(private modalCtrl: ModalController) {}

  continue() {
    this.modalCtrl.dismiss(null, 'continue');
  }
}
