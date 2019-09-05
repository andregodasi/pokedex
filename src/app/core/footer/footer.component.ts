import { Component, OnInit } from '@angular/core';
import { StateFooterService } from './state-footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private stateFooterService: StateFooterService) { }

  onPrevious() {
    this.stateFooterService.previous.emit();
  }

  onNext() {
    this.stateFooterService.next.emit();
  }

  onHome() {
    this.stateFooterService.home.emit();
  }

}
