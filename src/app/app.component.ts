import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { APP_CONFIG, appSettings } from './app.config';

@Component({
  selector: 'hinv-root',
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

  ngOnInit(): void {}

  private setTitle = () => {
    const timestamp = new Date().getMilliseconds();
    this.title = `Learning Angular (${timestamp})`;
  };

  constructor() {
    this.title$.subscribe(this.setTitle);
  }
}
