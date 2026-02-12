import { Component } from '@angular/core';
import { 
  IonContent, IonHeader, IonToolbar, IonTitle, 
  IonButtons, IonButton, IonIcon, IonSearchbar,
  IonList, IonItem, IonAvatar, IonLabel
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { chevronBackOutline, ellipsisHorizontal, add } from 'ionicons/icons';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonToolbar, IonTitle,
    IonButtons, IonButton, IonIcon, IonSearchbar,
    IonList, IonItem, IonAvatar, IonLabel,
    CommonModule, FormsModule
  ]
})
export class ContactsPage {
  searchQuery = '';
  
  allContacts = [
    { id: 1, name: 'Tiana Saris', bank: 'BCA', account: '2468 3545 ****', image: 'https://i.pravatar.cc/150?u=tiana1', verified: false },
    { id: 2, name: 'Tiana Saris', bank: 'BCA', account: '2468 3545 ****', image: 'https://i.pravatar.cc/150?u=tiana2', verified: true },
    { id: 3, name: 'Tiana Saris', bank: 'BCA', account: '2468 3545 ****', image: 'https://i.pravatar.cc/150?u=tiana3', verified: false },
    { id: 4, name: 'Tiana Saris', bank: 'BCA', account: '2468 3545 ****', image: 'https://i.pravatar.cc/150?u=tiana4', verified: true },
    { id: 5, name: 'Bella Martinez', bank: 'BCA', account: '2468 3545 ****', image: 'https://i.pravatar.cc/150?u=bella1', verified: false },
    { id: 6, name: 'Bella Rodriguez', bank: 'BCA', account: '2468 3545 ****', image: 'https://i.pravatar.cc/150?u=bella2', verified: true },
  ];

  groupedContacts: { [key: string]: any[] } = {};

  constructor(private router: Router) {
    addIcons({ chevronBackOutline, ellipsisHorizontal, add });
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

  selectContact(contact: any) {
    this.router.navigate(['/transfer-amount'], { state: { contact } });
  }
}
