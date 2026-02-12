import { Component } from '@angular/core';
import { 
     IonTitle, 
  IonButtons, IonButton, IonIcon, IonGrid, IonRow, IonCol
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { ModalController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  close, paperPlaneOutline, walletOutline, 
  receiptOutline, peopleOutline, phonePortraitOutline 
} from 'ionicons/icons';

@Component({
  selector: 'app-pay-bill-modal',
  templateUrl: './pay-bill-modal.component.html',
  styleUrls: ['./pay-bill-modal.component.scss'],
  standalone: true,
  imports: [
     IonTitle, 
     IonButton, IonIcon, IonGrid, IonRow, IonCol, CommonModule
  ]
})
export class PayBillModalComponent {
  categories = [
    { title: 'e-Wallet', icon: 'paper-plane-outline', color: '#f8fafc' },
    { title: 'Credit and data', icon: 'wallet-outline', color: '#f8fafc' },
    { title: 'Bill payment', icon: 'receipt-outline', color: '#f8fafc' },
    { title: 'Donation', icon: 'people-outline', color: '#f8fafc' },
    { title: 'Reload', icon: 'phone-portrait-outline', color: '#f8fafc' }
  ];

  constructor(private modalCtrl: ModalController) {
    addIcons({ 
      close, paperPlaneOutline, walletOutline, 
      receiptOutline, peopleOutline, phonePortraitOutline 
    });
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
