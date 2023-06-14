import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { APP_CONFIG, AppConfig, appSettings } from './app.config';

@Component({
  selector: 'hinv-root',
  // template: `<h1>Hello world from inline template!</h1>
  //   <p>Angular is awesome</p>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [{ provide: APP_CONFIG, useValue: appSettings }],
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';
  user = 'admin';
  description = 'learning a new skill';

  @ViewChild('name', { static: true }) name!: ElementRef;

  constructor(@Inject(APP_CONFIG) config: AppConfig) {}

  // @ViewChild('user', { read: ViewContainerRef })
  // vcr!: ViewContainerRef;

  ngOnInit(): void {}

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 50;
  // }
}
