import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonIcon, IonButton, IonDatetime, ModalController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { closeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-date-picker-modal',
  templateUrl: './date-picker-modal.component.html',
  styleUrls: ['./date-picker-modal.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonIcon, IonButton, IonDatetime]
})
export class DatePickerModalComponent implements OnInit {
  selectedDate: string = new Date().toISOString();

  constructor(private modalCtrl: ModalController) {
    addIcons({ closeOutline });
  }

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss();
  }

  onDateChange(event: any) {
    this.selectedDate = event.detail.value;
  }

  confirm() {
    this.modalCtrl.dismiss({
      date: this.selectedDate
    }, 'confirm');
  }
}
