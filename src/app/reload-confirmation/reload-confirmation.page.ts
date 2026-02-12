import { Component, OnInit } from '@angular/core';
import { 
  IonContent, IonHeader, IonToolbar, IonTitle, 
  IonButtons, IonButton, IonIcon, IonInput,
  ModalController
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { chevronBackOutline } from 'ionicons/icons';
import { ReloadSuccessModalComponent } from '../components/reload-success-modal/reload-success-modal.component';

@Component({
  selector: 'app-reload-confirmation',
  templateUrl: './reload-confirmation.page.html',
  styleUrls: ['./reload-confirmation.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonToolbar, IonTitle, 
    IonButtons, IonButton, IonIcon, IonInput,
    CommonModule, FormsModule
  ]
})
export class ReloadConfirmationPage implements OnInit {
  phoneNumber = '';
  amount = '';

  constructor(
    private router: Router,
    private modalCtrl: ModalController
  ) {
    addIcons({ chevronBackOutline });

    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.phoneNumber = navigation.extras.state['phoneNumber'] || '';
      this.amount = navigation.extras.state['amount'] || '';
    }
  }

  ngOnInit() {}

  goBack() {
    this.router.navigateByUrl('/reload');
  }

  async confirm() {
    const modal = await this.modalCtrl.create({
      component: ReloadSuccessModalComponent,
      cssClass: 'reload-success-modal'
    });

    await modal.present();
    await modal.onWillDismiss();
    
    this.router.navigate(['/tabs/home']);
  }
}
