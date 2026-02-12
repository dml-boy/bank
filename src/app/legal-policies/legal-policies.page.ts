import { Component } from '@angular/core';
import { 
  IonContent, IonHeader, IonToolbar, IonTitle, 
  IonButtons, IonButton, IonIcon 
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { chevronBackOutline } from 'ionicons/icons';

@Component({
  selector: 'app-legal-policies',
  templateUrl: './legal-policies.page.html',
  styleUrls: ['./legal-policies.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonToolbar, IonTitle, 
    IonButtons, IonButton, IonIcon, CommonModule
  ]
})
export class LegalPoliciesPage {
  constructor(private router: Router) {
    addIcons({ chevronBackOutline });
  }

  goBack() {
    this.router.navigate(['/tabs/profile-settings']);
  }
}
