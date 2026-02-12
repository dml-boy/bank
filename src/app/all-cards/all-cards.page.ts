import { Component } from '@angular/core';
import { 
  IonContent, IonHeader, IonToolbar, IonTitle, 
  IonButtons, IonButton, IonIcon
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { chevronBackOutline, ellipsisHorizontal } from 'ionicons/icons';

@Component({
  selector: 'app-all-cards',
  templateUrl: './all-cards.page.html',
  styleUrls: ['./all-cards.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonToolbar, IonTitle, 
    IonButtons, IonButton, IonIcon,
    CommonModule
  ]
})
export class AllCardsPage {
  cards = [
    {
      id: 1,
      name: 'X-Card',
      balance: 4664.63,
      lastDigits: '2468',
      expiry: '12/24',
      type: 'VISA',
      gradient: 'linear-gradient(135deg, #6b5b7e 0%, #4c3f5e 100%)'
    },
    {
      id: 2,
      name: 'X-Card',
      balance: 4664.63,
      lastDigits: '2468',
      expiry: '12/24',
      type: 'VISA',
      gradient: 'linear-gradient(135deg, #2c3e50 0%, #1a252f 100%)'
    }
  ];

  constructor(private router: Router) {
    addIcons({ chevronBackOutline, ellipsisHorizontal });
  }

  goBack() {
    this.router.navigate(['/tabs/home']);
  }

  openCardMenu() {
    console.log('Open card menu');
  }

  addCard() {
    console.log('Add new card');
  }
}
