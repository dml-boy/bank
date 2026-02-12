import { Component } from '@angular/core';
import { 
  IonContent, IonHeader, IonToolbar, IonTitle, 
  IonButtons, IonButton, IonIcon, IonAvatar
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  chevronBackOutline, ellipsisHorizontalOutline, 
  downloadOutline, shareOutline, chevronDownOutline
} from 'ionicons/icons';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.page.html',
  styleUrls: ['./statistic.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonToolbar, IonTitle, 
    IonButtons, IonButton, IonIcon, IonAvatar,
    CommonModule
  ],
})
export class StatisticPage {
  transactions = [
    {
      name: 'Tiana Saris',
      bank: 'BCA • 2468 3545 ****',
      amount: '$433,00',
      image: 'https://i.pravatar.cc/150?u=tiana',
    },
    {
      name: 'Figma',
      bank: 'Subscription',
      amount: '$433,00',
      image: 'https://cdn.iconscout.com/icon/free/png-256/figma-3521426-2944870.png',
    }
  ];

  months = ['January', 'February', 'March', 'April', 'May'];
  selectedMonth = 'Monthly';

  constructor(private router: Router) {
    addIcons({ 
      chevronBackOutline, ellipsisHorizontalOutline, 
      downloadOutline, shareOutline, chevronDownOutline
    });
  }

  goBack() {
    this.router.navigate(['/tabs/home']);
  }
}
