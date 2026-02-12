import { Component, OnInit } from '@angular/core';
import { 
  IonContent, IonHeader, IonToolbar, IonTitle, 
  IonButtons, IonAvatar, 
  IonLabel, IonInput, IonTextarea,
  IonButton, IonSelect, IonSelectOption, IonIcon,
  ModalController
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TotalTransferModalComponent } from '../components/total-transfer-modal/total-transfer-modal.component';
import { TransferSuccessModalComponent } from '../components/transfer-success-modal/transfer-success-modal.component';
import { addIcons } from 'ionicons';
import { chevronDownOutline, chevronBackOutline } from 'ionicons/icons';

@Component({
  selector: 'app-transfer-amount',
  templateUrl: './transfer-amount.page.html',
  styleUrls: ['./transfer-amount.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonToolbar, IonTitle, 
    IonButtons, IonAvatar, 
    IonLabel, IonInput, IonTextarea,
    IonButton, IonSelect, IonSelectOption, IonIcon,
    CommonModule, FormsModule
  ]
})
export class TransferAmountPage implements OnInit {
  contact: any = {
    name: 'Tiana Saris',
    bank: 'BCA',
    account: '2468 7645 6346',
    image: 'https://i.pravatar.cc/150?u=tiana'
  };

  amount = '0,00';
  currency = 'USD';
  message = '';

  constructor(private router: Router, private modalCtrl: ModalController) {
    addIcons({ chevronDownOutline, chevronBackOutline });
    
    // Attempt to get contact from navigation state
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.contact = navigation.extras.state['contact'];
    }
  }

  ngOnInit() {}

  goBack() {
    this.router.navigate(['/send-money']);
  }

  async sendMoney() {
    if (!this.amount) {
      return;
    }

    // Open Total Transfer Modal
    const modal = await this.modalCtrl.create({
      component: TotalTransferModalComponent,
      cssClass: 'total-transfer-modal',
      componentProps: {
        transferData: {
          amount: this.amount,
          from: 'Your Account',
          to: `${this.contact.bank} • ${this.contact.account}`,
          transfer: this.amount,
          total: this.amount
        }
      }
    });

    await modal.present();
    const { role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      // Show success modal
      await this.showSuccessModal();
    }
  }

  async showSuccessModal() {
    const successModal = await this.modalCtrl.create({
      component: TransferSuccessModalComponent,
      cssClass: 'transfer-success-modal'
    });

    await successModal.present();
    await successModal.onWillDismiss();
    
    // Navigate back to home
    this.router.navigate(['/tabs/home']);
  }
}
