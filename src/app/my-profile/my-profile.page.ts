import { Component } from '@angular/core';
import { 
  IonContent, IonHeader, IonToolbar, IonTitle, 
  IonButtons, IonButton, IonIcon,
  IonInput, IonTextarea
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { chevronBackOutline, cameraOutline, createOutline } from 'ionicons/icons';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonToolbar, IonTitle, 
    IonButtons, IonButton, IonIcon,
    IonInput, IonTextarea,
    CommonModule, FormsModule
  ]
})
export class MyProfilePage {
  isEditMode = false;
  
  profile = {
    name: 'Tiana Saris',
    email: 'Brooklynsimmons@gmail.com',
    phone: '+1 3712 3789',
    address: '711 Leavenworth Apt. # 47 San Francisco, CA 94109',
    image: 'https://i.pravatar.cc/150?u=tiana'
  };

  constructor(private router: Router) {
    addIcons({ chevronBackOutline, cameraOutline, createOutline });
    
    // Check if we should start in edit mode
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state?.['editMode']) {
      this.isEditMode = true;
    }
  }

  goBack() {
    this.router.navigate(['/tabs/profile-settings']);
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  saveChanges() {
    // Save profile changes
    console.log('Profile saved:', this.profile);
    this.isEditMode = false;
  }

  uploadPhoto() {
    // Handle photo upload
    console.log('Upload photo');
  }
}
