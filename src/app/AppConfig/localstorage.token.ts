import { InjectionToken } from '@angular/core';

export const LocalStorageToken = new InjectionToken('localstorage', {
  providedIn: 'root',
  factory() {
    return localStorage;
  },
});
