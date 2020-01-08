import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../models/image.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private uid: string;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.afAuth.authState.subscribe(auth => {
      if(auth!==undefined && auth!== null ){
        this.uid = auth.uid;
      }
    });
   }

   getImages(): Observable<Image[]>{
     return this.db.list<Image>('uploads').valueChanges();
   }
}
