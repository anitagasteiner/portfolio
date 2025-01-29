import { Component, inject } from '@angular/core';
import { GeneralService } from '../../../general.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  generalService = inject(GeneralService);

  constructor() {
    this.scrollToTop();    
  }

  scrollToTop() {
    window.scrollTo(
      {
        top: 0,
        behavior: 'smooth'
      }
    );
  }

  // changeButton() {
  //   let openButton = document.querySelector('#openNavbar');
  //   let closeButton = document.querySelector('#closeNavbar');
  //   if (openButton && closeButton) {
  //     openButton.classList.remove('hide');
  //     closeButton.classList.add('hide');
  //   }
  // }

}
