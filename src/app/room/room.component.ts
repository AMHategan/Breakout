import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  id: any;
  room: any;
  image: any;

  constructor(
    private firebaseService:FirebaseService, 
    private router:Router, 
    private route:ActivatedRoute) {}

  ngOnInit() {
    // Get ID
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getRoomDetails(this.id).valueChanges().subscribe(room => { 
      this.room = room;
      let storageRef = firebase.storage().ref();
      storageRef.getDownloadURL().then((url) => {
        // Set image url
        this.image = url;
      }).catch((error) => {
        console.log(error);
      });
    });
  }

}
