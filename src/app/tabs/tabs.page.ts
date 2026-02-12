import { Component } from '@angular/core';
import { 
  IonTabs, IonTabBar, IonTabButton, IonIcon, 
  IonLabel, ModalController
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  homeOutline, home, statsChartOutline, statsChart, 
  cardOutline, card, personOutline, person, add
} from 'ionicons/icons';
import { PayBillModalComponent } from '../components/pay-bill-modal/pay-bill-modal.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage {
  constructor(private modalCtrl: ModalController) {
    addIcons({ 
      homeOutline, home, 
      statsChartOutline, statsChart, 
      cardOutline, card, 
      personOutline, person, 
      add 
    });
  }

  async openPayBillModal() {
    const modal = await this.modalCtrl.create({
      component: PayBillModalComponent,
      cssClass: 'pay-bill-modal'
    });
    await modal.present();
  }
}
