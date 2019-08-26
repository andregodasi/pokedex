import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  isShow = false;

  constructor() { }

  isShowChange(isShow: boolean): void {
    setTimeout(() => {
      this.isShow = !!isShow;
    }, 1);
  }
}
