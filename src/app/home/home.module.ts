import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

// Importaciones de Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { HomePageRoutingModule } from './home-routing.module';

// No olvides importar el archivo environment
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngularFireModule.initializeApp(environment.firebase), // Inicializa AngularFireModule con tu configuración de Firebase
    AngularFirestoreModule, // Agrega AngularFirestoreModule a los imports
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
