import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { 
  IonContent, IonHeader, IonToolbar, IonButtons, 
  IonBackButton, IonItem, IonLabel, IonInput, 
  IonButton, IonIcon, IonText,IonTitle
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  eyeOutline, eyeOffOutline, logoGoogle, 
  logoApple, logoFacebook, chevronBackOutline 
} from 'ionicons/icons';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonToolbar, IonButtons, 
    IonInput, IonButton, IonIcon, IonTitle, IonLabel,
    CommonModule, FormsModule
  ]
})
export class SignUpPage {
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

  goToSignIn() {
    this.router.navigateByUrl('/sign-in');
  }

  signUp() {
    this.router.navigate(['/tabs/home']);
  }
}
