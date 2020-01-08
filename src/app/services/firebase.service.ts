import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection,  AngularFirestoreDocument} from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Observable , of } from 'rxjs';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { switchMap } from 'rxjs/operators';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  rooms: AngularFireList<any[]>;
  room: AngularFireObject<any[]>;
  folder: any;

  constructor(private af: AngularFireDatabase) {
    this.folder = 'roomimages';
  }

  getRooms(){
    this.rooms = this.af.list('/rooms') as AngularFireList<Room[]>
    return this.rooms;
  }

  getRoomDetails(id){
    this.room = this.af.object('/rooms/room' + id)
    return this.room;
  }

  addRoom(room){
    // Create root ref
    let storageRef = firebase.storage().ref();
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      let path = `/${this.folder}/${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        room.image = selectedFile.name;
        room.path = path;
        return this.rooms.push(room);
      });
    }
  }

}

interface Room{
  $id?:string;
  name?:string;
  description?:string;
  image?:string;
  slogan?:string;
  difficulty?:string;
}
