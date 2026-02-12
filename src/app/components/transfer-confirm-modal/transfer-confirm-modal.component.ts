import { Component, Input } from '@angular/core';
import { 
  IonButton, IonIcon, ModalController
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { arrowUpOutline } from 'ionicons/icons';

@Component({
  selector: 'app-transfer-confirm-modal',
  templateUrl: './transfer-confirm-modal.component.html',
  styleUrls: ['./transfer-confirm-modal.component.scss'],
  standalone: true,
  imports: [IonButton, IonIcon, CommonModule]
})
export class TransferConfirmModalComponent {
  @Input() transferData: any = {
    amount: '0,00',
    from: 'e-Wallet • 3446 4655 5445',
    to: 'BCA • 2468 3545 4534',
    adminFee: 'Free'
  };

  constructor(private modalCtrl: ModalController) {
    addIcons({ arrowUpOutline });
  }

  cancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    this.modalCtrl.dismiss(this.transferData, 'confirm');
  }
}
