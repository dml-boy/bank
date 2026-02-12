import { Component } from '@angular/core';
import { 
  IonContent, IonHeader, IonToolbar, IonTitle, 
  IonButtons, IonButton, IonIcon, IonToggle, ModalController
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LogoutModalComponent } from '../components/logout-modal/logout-modal.component';
import { addIcons } from 'ionicons';
import { 
  personOutline, downloadOutline, scanOutline,
  lockClosedOutline, notificationsOutline,
  globeOutline, alertCircleOutline, logOutOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.page.html',
  styleUrls: ['./profile-settings.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonToolbar, IonTitle, 
    IonButtons, IonButton, IonIcon, IonToggle,
    CommonModule,
    FormsModule
  ]
})
export class ProfileSettingsPage {
  faceIdEnabled = true;
  
  profile = {
    name: 'Tiana Saris',
    username: 'Broklyn',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop'
  };

  constructor(
    private router: Router,
    private modalCtrl: ModalController
  ) {
    addIcons({ 
      personOutline, downloadOutline, scanOutline,
      lockClosedOutline, notificationsOutline,
      globeOutline, alertCircleOutline, logOutOutline
    });
  } 

  goBack() {
    this.router.navigate(['/tabs/my-profile']);
  }

  navigateTo(page: string) {
    if (page === 'profile') {
      this.router.navigate(['/tabs/my-profile']);
    } else if (page === 'history') {
      // Navigate to recent transactions page (can be implemented later)
      this.router.navigate(['/tabs/statistic']);
    } else if (page === 'change-password') {
      // Navigate to create new password page
      this.router.navigate(['/create-new-password']);
    } else if (page === 'forgot-password') {
      this.router.navigate(['/forgot-password']);
    } else if (page === 'notification') {
      this.router.navigate(['/notification']);
    } else if (page === 'languages') {
      this.router.navigate(['/language-selection']);
    } else if (page === 'help') {
      // Navigate to legal policies/help page
      this.router.navigate(['/legal-policies']);
    }
  }

  async logout() {
    const modal = await this.modalCtrl.create({
      component: LogoutModalComponent,
      cssClass: 'logout-modal'
    });
    return await modal.present();
  }
}
