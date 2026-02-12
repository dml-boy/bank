import { Component } from '@angular/core';
import { 
  IonContent, IonAvatar, IonIcon, IonCard, IonCardContent, 
  IonGrid, IonRow, IonCol, ModalController
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  notificationsOutline, sendOutline, walletOutline, 
  add, statsChartOutline, cardOutline, personOutline,
  chevronForwardOutline, arrowForwardOutline, paperPlaneOutline,
  home, homeOutline, downloadOutline, peopleOutline, chevronBackOutline
} from 'ionicons/icons';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PayBillModalComponent } from '../components/pay-bill-modal/pay-bill-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonAvatar, IonIcon, IonCard, IonCardContent, 
    IonGrid, IonRow, IonCol, CommonModule
  ],
})
export class HomePage {
  cards = [
    {
      type: 'X-Card',
      brand: 'VISA',
      balance: '$4.664,63',
      number: '2468',
      expiry: '12/24',
      class: 'x-card'
    },
    {
      type: 'M-Card',
      brand: 'MASTERCARD',
      balance: '$2.664,63',
      number: '7897',
      expiry: '08/25',
      class: 'm-card'
    }
  ];

  actions = [
    { name: 'Send money', icon: 'paper-plane-outline', sub: 'Take acc to acc' },
    { name: 'Pay the bill', icon: 'wallet-outline', sub: 'Lorem ipsum' },
    { name: 'Request', icon: 'download-outline', sub: 'Lorem ipsum' },
    { name: 'Contact', icon: 'people-outline', sub: 'Lorem ipsum' }
  ];

  constructor(private router: Router, private modalCtrl: ModalController) {
    addIcons({ 
      notificationsOutline, sendOutline, walletOutline, 
      add, statsChartOutline, cardOutline, personOutline,
      chevronForwardOutline, arrowForwardOutline, paperPlaneOutline,
      home, 'home-outline': homeOutline,
      'download-outline': downloadOutline,
      'people-outline': peopleOutline,
      chevronBackOutline
    });
  }

  goToPage(page: string) {
    if (page === 'Send money') {
      this.router.navigate(['/send-money']);
    } else if (page === 'Pay the bill') {
      this.openPayBillModal();
    } else if (page === 'Contact') {
      this.router.navigate(['/contacts']);
    } else if (page === 'Request') {
      this.router.navigate(['/request-money']);
    }
  }

  async openPayBillModal() {
    const modal = await this.modalCtrl.create({
      component: PayBillModalComponent,
      cssClass: 'pay-bill-modal'
    });
    await modal.present();
  }
}
