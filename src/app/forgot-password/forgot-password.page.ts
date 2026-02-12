import { Component } from '@angular/core';
import { 
  IonContent, IonHeader, IonToolbar,
  IonButtons, IonButton, IonIcon, IonInput
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { chevronBackOutline } from 'ionicons/icons';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonToolbar,
    IonButtons, IonButton, IonIcon, IonInput,
    CommonModule, FormsModule
  ]
})
export class ForgotPasswordPage {
  email: string = '';

  constructor(private router: Router) {
    addIcons({ chevronBackOutline });
  }

  goBack() {
    this.router.navigate(['/tabs/profile-settings']);
  }

  onNext() {
    this.router.navigate(['/create-new-password']);
  }
}
