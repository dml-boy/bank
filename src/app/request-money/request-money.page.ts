import { Component } from '@angular/core';
import { 
  IonContent, IonHeader, IonToolbar, IonTitle, 
  IonButtons, IonButton, IonIcon, IonInput,
  IonDatetime, IonLabel, ModalController
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { chevronBackOutline, ellipsisHorizontal, calendarOutline, chevronDownOutline } from 'ionicons/icons';
import { RequestSuccessModalComponent } from '../components/request-success-modal/request-success-modal.component';
import { DatePickerModalComponent } from '../components/date-picker-modal/date-picker-modal.component';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-request-money',
  templateUrl: './request-money.page.html',
  styleUrls: ['./request-money.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonToolbar, IonTitle, 
    IonButtons, IonButton, IonIcon, IonInput,
    IonDatetime, IonLabel, CommonModule, FormsModule
  ]
})
export class RequestMoneyPage {
  payerName = '';
  email = '';
  description = '';
  dueDate = '';
  amount = '0,00';
  currency = 'USD';
  showDatePicker = false;

  constructor(
    private router: Router,
    private modalCtrl: ModalController
  ) {
    addIcons({ chevronBackOutline, ellipsisHorizontal, calendarOutline, chevronDownOutline });
  }

  goBack() {
    this.router.navigateByUrl('tabs/home');
  }

  async toggleDatePicker() {
    const modal = await this.modalCtrl.create({
      component: DatePickerModalComponent,
      cssClass: 'date-picker-modal'
    });

    await modal.present();

    const { data, role } = await modal.onWillDismiss();
    if (role === 'confirm' && data) {
      this.dueDate = format(parseISO(data.date), 'dd MMMM yyyy');
    }
  }

  onDateChange(event: any) {
    this.dueDate = format(parseISO(event.detail.value), 'dd MMMM yyyy');
    this.showDatePicker = false;
  }

  async requestMoney() {
    const modal = await this.modalCtrl.create({
      component: RequestSuccessModalComponent,
      cssClass: 'request-success-modal'
    });

    await modal.present();
    await modal.onWillDismiss();
    
    this.router.navigate(['/tabs/home']);
  }
}
