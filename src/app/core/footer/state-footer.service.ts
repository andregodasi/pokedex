import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateFooterService {
  previous = new EventEmitter<any>();
  next = new EventEmitter<any>();
  home = new EventEmitter<any>();

  constructor() { }
}
