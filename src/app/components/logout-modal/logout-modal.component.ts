import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonIcon, IonButton, ModalController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { closeOutline } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-modal',
  templateUrl: './logout-modal.component.html',
  styleUrls: ['./logout-modal.component.scss'],
  standalone: true,
  imports: [CommonModule, IonIcon, IonButton]
})
export class LogoutModalComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private router: Router
  ) {
    addIcons({ closeOutline });
  }

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss();
  }

  logout() {
    this.modalCtrl.dismiss();
    this.router.navigate(['/sign-in'], { replaceUrl: true });
  }
}
