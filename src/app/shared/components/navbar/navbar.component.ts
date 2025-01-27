import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  closeNavbar() {
    const navbar = document.querySelector('#navbar');
    if (navbar) {
      navbar.classList.add('hide');      
    }
  }

  showScrollbar() {
    let scrollbar = document.getElementById('body');
    if (scrollbar) {
      scrollbar.classList.remove('hideOverflow');
    }
  }

  changeButton() {
    let openButton = document.querySelector('#openNavbar');
    let closeButton = document.querySelector('#closeNavbar');
    if (openButton && closeButton) {
      openButton.classList.remove('hide');
      closeButton.classList.add('hide');
    }
  }

}
