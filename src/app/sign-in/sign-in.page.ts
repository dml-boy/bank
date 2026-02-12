import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { 
  IonContent, IonHeader, IonToolbar, IonButtons, 
  IonBackButton, IonItem, IonLabel, IonInput, 
  IonButton, IonIcon, IonCheckbox, IonText,IonTitle 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  eyeOutline, eyeOffOutline, logoGoogle, 
  logoApple, logoFacebook, chevronBackOutline 
} from 'ionicons/icons';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonToolbar, IonButtons, 
    IonInput, IonButton, IonIcon, IonCheckbox, IonTitle, IonLabel,
    CommonModule, FormsModule
  ]
})
export class SignInPage {
  showPassword = false;

  constructor(private router: Router) {
    addIcons({ 
      eyeOutline, eyeOffOutline, logoGoogle, 
      logoApple, logoFacebook, chevronBackOutline 
    });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  goToSplash() {
    this.router.navigateByUrl('/splash');
  }

  goToSignUp() {
    this.router.navigateByUrl('/sign-up');
  }

  signIn() {
    this.router.navigateByUrl('/tabs/home');
  }
}
