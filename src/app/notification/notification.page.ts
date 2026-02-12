import { Component } from '@angular/core';
import { 
  IonContent, IonHeader, IonToolbar, IonTitle, 
  IonButtons, IonButton, IonIcon, IonToggle
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { 
  chevronBackOutline, notificationsOutline, trendingUpOutline, 
  trendingDownOutline, shieldCheckmarkOutline 
} from 'ionicons/icons';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonToolbar, IonTitle, 
    IonButtons, IonButton, IonIcon, IonToggle, 
    CommonModule, FormsModule
  ]
})
export class NotificationPage {
  showNotifications = true;

  constructor(private router: Router) {
    addIcons({ 
      chevronBackOutline, notificationsOutline, trendingUpOutline, 
      trendingDownOutline, shieldCheckmarkOutline 
    });
  }

  goBack() {
    this.router.navigate(['/tabs/profile-settings']);
  }
}
