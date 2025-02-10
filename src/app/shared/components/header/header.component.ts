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

  languageSwitch = "English";
  
  constructor() {
    this.generalService.showBtn();
  }

  getCurrentLink() {
    if (this.generalService.navbarOpened) {
      return '';
    } else {
      return 'navbar';
    }
  }

  switchLanguage() {
    if (this.languageSwitch == "English") {
      console.log('Switch language to English!');
      this.languageSwitch = "German";
    } else if (this.languageSwitch == "German") {
      console.log('Switch language to German!');
      this.languageSwitch = "English";
    }
  }

 



}
