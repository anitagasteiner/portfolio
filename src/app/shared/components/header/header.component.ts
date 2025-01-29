import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GeneralService } from '../../../general.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  generalService = inject(GeneralService);
  imageIntervalId: number = 0;

  constructor() {
    this.generalService.showBtnOpen();
  }

  startImageTransition() {
    this.imageIntervalId = window.setInterval(() => {
      this.generalService.imageAnimation();
      console.log(this.imageIntervalId);
      setTimeout(() => {
        this.stopImageTransition();
        this.generalService.showBtnClose();
      }, 1000);
    }, 300);
  }

  stopImageTransition() {
    clearInterval(this.imageIntervalId);
  }

}

