import { Component, OnInit, OnChanges } from '@angular/core';
import { RoomService } from '../services/room.service';
import { Room } from '../models/room';
import { ImageService } from '../services/image.service';
import { Observable } from 'rxjs';
import { Image } from '../models/image.model';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, OnChanges {
  rooms: Room[];
  images: Observable<Image[]>;
  constructor(private roomService: RoomService, private imageService: ImageService) { }
  ngOnInit() {
    this.roomService.getRooms().subscribe(rooms=>{
      //console.log(rooms);
      this.rooms=rooms;
    });

    this.images = this.imageService.getImages();
  }

  ngOnChanges(){
    this.images = this.imageService.getImages();
  }

}
