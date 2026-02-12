import { Component, Input } from '@angular/core';
import { IonButton, IonIcon, ModalController } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { cloudUploadOutline } from 'ionicons/icons';

@Component({
  selector: 'app-total-transfer-modal',
  templateUrl: './total-transfer-modal.component.html',
  styleUrls: ['./total-transfer-modal.component.scss'],
  standalone: true,
  imports: [IonButton, IonIcon, CommonModule]
})
export class TotalTransferModalComponent {
  @Input() transferData: any;

  constructor(private modalCtrl: ModalController) {
    addIcons({ cloudUploadOutline });
  }

  cancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    this.modalCtrl.dismiss(null, 'confirm');
  }
}
