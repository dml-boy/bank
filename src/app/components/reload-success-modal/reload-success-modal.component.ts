import { Component } from '@angular/core';
import { IonButton, ModalController } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reload-success-modal',
  templateUrl: './reload-success-modal.component.html',
  styleUrls: ['./reload-success-modal.component.scss'],
  standalone: true,
  imports: [IonButton, CommonModule]
})
export class ReloadSuccessModalComponent {
  constructor(private modalCtrl: ModalController) {}

  continue() {
    this.modalCtrl.dismiss(null, 'continue');
  }
}
