import {
  AfterViewInit,
  Component,
  DoCheck,
  Inject,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { LocalStorageToken } from '../AppConfig/localstorage.token';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent
  implements OnInit, DoCheck, AfterViewInit, OnDestroy
{
  hotelName = 'KunJon Hotels';
  numberOfRooms = 10;
  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  title = 'Room List';

  roomList: RoomList[] = [];

  selectedRoom!: RoomList;

  @ViewChild(HeaderComponent, { static: true })
  headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent)
  headerChildren!: QueryList<HeaderComponent>;

  constructor(
    private roomsService: RoomsService,
    @Inject(LocalStorageToken) private localStorage: Storage
  ) {}

  ngOnInit(): void {
    this.roomList = this.roomsService.getRooms();
    this.localStorage.setItem('name', 'KunJon Hotel');
  }

  ngAfterViewInit(): void {
    this.headerComponent.title = 'Rooms view';
    this.headerChildren.last.title = 'Last Rooms View';
  }

  ngDoCheck(): void {
    console.log('on Changes is called');
  }

  ngOnDestroy(): void {
    console.log('destroyed');
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Changed Name';
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 2,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      photos: 'https://unsplash.com/photos/X5UrOwSCYYI',
      price: 1000,
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
    };
    this.roomList = [...this.roomList, room];
  }
}
