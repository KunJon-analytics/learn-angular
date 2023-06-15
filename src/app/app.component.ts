import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Observable, from } from 'rxjs';
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

  title$ = new Observable((observer) => {
    setInterval(() => {
      observer.next();
    }, 2000);
  });

  @ViewChild('name', { static: true }) name!: ElementRef;

  // @ViewChild('user', { read: ViewContainerRef })
  // vcr!: ViewContainerRef;

  ngOnInit(): void {}

  private setTitle = () => {
    const timestamp = new Date().getMilliseconds();
    this.title = `Learning Angular (${timestamp})`;
  };

  private changeTitle(callback: Function) {
    setTimeout(() => {
      callback();
    }, 3000);
  }

  private onComplete() {
    return new Promise<void>((resolve) => {
      setInterval(() => {
        resolve();
      }, 2000);
    });
  }

  constructor() {
    this.title$.subscribe(this.setTitle);
  }

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 50;
  // }
}
