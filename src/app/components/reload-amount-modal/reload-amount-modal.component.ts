import { Component } from '@angular/core';
import { 
  IonButton, IonIcon, ModalController
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { close, chevronDown } from 'ionicons/icons';

@Component({
  selector: 'app-reload-amount-modal',
  templateUrl: './reload-amount-modal.component.html',
  styleUrls: ['./reload-amount-modal.component.scss'],
  standalone: true,
  imports: [
    IonButton, IonIcon, CommonModule, FormsModule
  ]
})
export class ReloadAmountModalComponent {
  amount = '0,00';
  currency = 'USD';

  numpadKeys = [
    ['7', '8', '9'],
    ['4', '5', '6'],
    ['3', '2', '1'],
    [',', '0', '.']
  ];

  constructor(private modalCtrl: ModalController) {
    addIcons({ close, chevronDown });
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  pressKey(key: string) {
    if (this.amount === '0' || this.amount === '0,00') {
      this.amount = key;
    } else {
      this.amount += key;
    }
  }

  continue() {
    this.modalCtrl.dismiss({ amount: this.amount }, 'continue');
  }
}
