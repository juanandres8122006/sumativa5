import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { LocalNotifications } from '@capacitor/local-notifications';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  lightValue: number;

  constructor(private firestore: AngularFirestore) {}

  ngOnInit() {
    this.listenToLightData();
  }

  listenToLightData() {
    this.firestore.collection('lightData').valueChanges().subscribe((data: any[]) => {
      if (data && data.length > 0) {
        const latestLightData = data[data.length - 1];
        this.lightValue = latestLightData.value;

        const isNight = this.lightValue < 50;

        this.sendNotification(isNight);
      }
    });
  }

  async sendNotification(isNight: boolean) {
    const title = isNight ? "Es de noche" : "Es de día";
    const body = isNight ? "La intensidad de luz indica que es de noche" : "La intensidad de luz indica que es de día";

    await LocalNotifications.schedule({
      notifications: [
        {
          title: title,
          body: body,
          id: 1
        }
      ]
    });
  }
}
