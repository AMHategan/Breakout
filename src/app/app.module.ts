import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FirebaseService } from './services/firebase.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './rooms/rooms.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RoomComponent } from './room/room.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { EditRoomComponent } from './edit-room/edit-room.component';
import { AuthService } from './services/auth.service';

export const firebaseConfig = {
  apiKey: "AIzaSyBwe-44CHP7hy5Zb1PuevmJrONH3nySv5M",
  authDomain: "breakout-fb6bf.firebaseapp.com",
  databaseURL: "https://breakout-fb6bf.firebaseio.com",
  projectId: "breakout-fb6bf",
  storageBucket: "breakout-fb6bf.appspot.com",
  messagingSenderId: "2848951775",
}

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'rooms', component: RoomsComponent},
  {path: 'room/:id', component:RoomComponent},
  {path:'add-room', component:AddRoomComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoomsComponent,
    NavbarComponent,
    RoomComponent,
    AddRoomComponent,
    EditRoomComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireFunctionsModule,
    AngularFireStorageModule,
    AngularFirestoreModule
  ],
  providers: [FirebaseService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
