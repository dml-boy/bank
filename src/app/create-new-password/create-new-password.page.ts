import { Component } from '@angular/core';
import { 
  IonContent, IonHeader, IonToolbar, IonButtons, IonButton, IonIcon, IonInput
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { chevronBackOutline, eyeOutline, eyeOffOutline } from 'ionicons/icons';

@Component({
  selector: 'app-create-new-password',
  templateUrl: './create-new-password.page.html',
  styleUrls: ['./create-new-password.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonToolbar, 
    IonButtons, IonButton, IonIcon, IonInput, 
    CommonModule, FormsModule
  ]
})
export class CreateNewPasswordPage {
  newPassword = '';
  confirmPassword = '';
  showNewPassword = false;
  showConfirmPassword = false;

  constructor(private router: Router) {
    addIcons({ chevronBackOutline, eyeOutline, eyeOffOutline });
  }

  goBack() {
    this.router.navigate(['/tabs/profile-settings']);
  }

  toggleNewPassword() {
    this.showNewPassword = !this.showNewPassword;
  }

  toggleConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  onSubmit() {
    this.router.navigate(['/sign-in']);
  }
}
