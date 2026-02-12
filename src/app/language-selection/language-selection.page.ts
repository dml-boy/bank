import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonHeader, IonToolbar, IonTitle, 
  IonButtons, IonButton, IonIcon, IonList, 
  IonItem, IonLabel 
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { chevronBackOutline, checkmarkOutline } from 'ionicons/icons';

@Component({
  selector: 'app-language-selection',
  templateUrl: './language-selection.page.html',
  styleUrls: ['./language-selection.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonToolbar, IonTitle, 
    IonButtons, IonButton, IonIcon, IonList, 
    IonItem, IonLabel, CommonModule, FormsModule
  ]
})
export class LanguageSelectionPage implements OnInit {
  selectedLanguage = 'en-uk';

  constructor(private router: Router) {
    addIcons({ chevronBackOutline, checkmarkOutline });
  }

  ngOnInit() {}

  goBack() {
    this.router.navigate(['/tabs/profile-settings']);
  }

  selectLanguage(lang: string) {
    this.selectedLanguage = lang;
  }
}
