import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Room } from '../models/Room';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RoomService {
  roomsCollection: AngularFirestoreCollection<Room>;
  rooms: Observable<Room[]>;
  constructor(public afs: AngularFirestore) {
    this.roomsCollection=afs.collection<Room>('rooms');
    this.rooms=this.roomsCollection.valueChanges();
   }

   getRooms(){
     return this.rooms;
   }
}
