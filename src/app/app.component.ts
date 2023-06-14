import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'hinv-root',
  // template: `<h1>Hello world from inline template!</h1>
  //   <p>Angular is awesome</p>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';
  user = 'admin';
  description = 'learning a new skill';

  @ViewChild('name', { static: true }) name!: ElementRef;

  // @ViewChild('user', { read: ViewContainerRef })
  // vcr!: ViewContainerRef;

  ngOnInit(): void {}

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 50;
  // }
}
