import { Component } from '@angular/core';
import { 
  IonContent, IonHeader, IonToolbar, IonTitle, 
  IonButtons, IonButton, IonIcon, IonSearchbar,
  IonList, IonItem, IonAvatar, IonLabel, IonInput,
  ModalController
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { chevronBackOutline, ellipsisHorizontal } from 'ionicons/icons';
import { ReloadAmountModalComponent } from '../components/reload-amount-modal/reload-amount-modal.component';

@Component({
  selector: 'app-reload',
  templateUrl: './reload.page.html',
  styleUrls: ['./reload.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonToolbar, IonTitle,
    IonButtons, IonButton, IonIcon, IonSearchbar,
    IonList, IonItem, IonAvatar, IonLabel, IonInput,
    CommonModule, FormsModule
  ]
})
export class ReloadPage {
  searchQuery = '';
  phoneNumber = '';
  
  allContacts = [
    { id: 1, name: 'Tiana Saris', bank: 'BCA', account: '2468 3545 ****', image: 'https://i.pravatar.cc/150?u=tiana1', verified: false },
    { id: 2, name: 'Tiana Saris', bank: 'BCA', account: '2468 3545 ****', image: 'https://i.pravatar.cc/150?u=tiana2', verified: true },
    { id: 3, name: 'Tiana Saris', bank: 'BCA', account: '2468 3545 ****', image: 'https://i.pravatar.cc/150?u=tiana3', verified: false },
    { id: 4, name: 'Tiana Saris', bank: 'BCA', account: '2468 3545 ****', image: 'https://i.pravatar.cc/150?u=tiana4', verified: true },
    { id: 5, name: 'Bella Martinez', bank: 'BCA', account: '2468 3545 ****', image: 'https://i.pravatar.cc/150?u=bella1', verified: false },
  ];

  groupedContacts: { [key: string]: any[] } = {};

  constructor(private router: Router, private modalCtrl: ModalController) {
    addIcons({ chevronBackOutline, ellipsisHorizontal });
    this.groupContacts();
  }

  groupContacts() {
    this.groupedContacts = {};
    const filtered = this.allContacts.filter(contact => 
      contact.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );

    filtered.forEach(contact => {
      const firstLetter = contact.name.charAt(0).toUpperCase();
      if (!this.groupedContacts[firstLetter]) {
        this.groupedContacts[firstLetter] = [];
      }
      this.groupedContacts[firstLetter].push(contact);
    });
  }

  onSearchChange() {
    this.groupContacts();
  }

  goBack() {
    this.router.navigateByUrl('/tabs/home');
  }

  async selectContact(contact: any) {
    this.phoneNumber = contact.account.replace(/\*/g, '');
    await this.openAmountModal();
  }

  async openAmountModal() {
    const modal = await this.modalCtrl.create({
      component: ReloadAmountModalComponent,
      cssClass: 'reload-amount-modal'
    });

    await modal.present();
    const { data, role } = await modal.onWillDismiss();

    if (role === 'continue' && data) {
      this.router.navigate(['/reload-confirmation'], { 
        state: { phoneNumber: this.phoneNumber, amount: data.amount } 
      });
    }
  }
}
