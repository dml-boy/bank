import { Component, OnInit } from '@angular/core';
import { 
  IonContent, IonHeader, IonToolbar, IonTitle, 
  IonButtons, IonSearchbar, 
  IonSegment, IonSegmentButton, IonLabel, 
  IonList, IonItem, IonAvatar, IonIcon,
  IonButton
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { add, searchOutline, star, starOutline, chevronBackOutline } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send-money',
  templateUrl: './send-money.page.html',
  styleUrls: ['./send-money.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonToolbar, IonTitle, 
    IonButtons, IonSearchbar, 
    IonSegment, IonSegmentButton, IonLabel, 
    IonList, IonItem, IonAvatar, IonIcon,
    IonButton, CommonModule, FormsModule
  ]
})
export class SendMoneyPage implements OnInit {
  selectedSegment = 'all';
  searchQuery = '';
  
  contacts = [
    { id: 1, name: 'Tiana Saris', bank: 'BCA', account: '2468 3545', favorite: false, image: 'https://i.pravatar.cc/150?u=tiana' },
    { id: 2, name: 'Kaiya Baptista', bank: 'BCA', account: '2468 3545', favorite: false, image: 'https://i.pravatar.cc/150?u=kaiya' },
    { id: 3, name: 'Desirae Bergson', bank: 'BCA', account: '2468 3545', favorite: true, image: 'https://i.pravatar.cc/150?u=desirae' },
    { id: 4, name: 'Emery Schleifer', bank: 'BCA', account: '2468 3545', favorite: false, image: 'https://i.pravatar.cc/150?u=emery' },
    { id: 5, name: 'Ruben Rhiel Madsen', bank: 'BCA', account: '2468 3545', favorite: true, image: 'https://i.pravatar.cc/150?u=ruben' },
    { id: 6, name: 'Roger Levin', bank: 'BCA', account: '2468 3545', favorite: false, image: 'https://i.pravatar.cc/150?u=roger' },
    { id: 7, name: 'Jaydon Botosh', bank: 'BCA', account: '2468 3545', favorite: false, image: 'https://i.pravatar.cc/150?u=jaydon' },
  ];

  filteredContacts = [...this.contacts];

  constructor(private router: Router) {
    addIcons({ add, searchOutline, star, starOutline, chevronBackOutline });
  }

  ngOnInit() {}

  goBack() {
    this.router.navigate(['/tabs/home']);
  }

  filterContacts() {
    this.filteredContacts = this.contacts.filter(contact => {
      const matchesSearch = contact.name.toLowerCase().includes(this.searchQuery.toLowerCase()) || 
                            contact.account.includes(this.searchQuery);
      const matchesSegment = this.selectedSegment === 'all' || (this.selectedSegment === 'favorite' && contact.favorite);
      return matchesSearch && matchesSegment;
    });
  }

  onSegmentChange(ev: any) {
    this.selectedSegment = ev.detail.value;
    this.filterContacts();
  }

  selectContact(contact: any) {
    this.router.navigate(['/transfer-amount'], { state: { contact } });
  }

  toggleFavorite(event: Event, contact: any) {
    event.stopPropagation();
    contact.favorite = !contact.favorite;
    this.filterContacts();
  }
}
