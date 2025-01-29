import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
// import { MainContentComponent } from '../../../main-content/main-content.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    // NavbarComponent,
    RouterLink,
    RouterLinkActive
    // MainContentComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  showOpenButton() {
    let openButton = document.querySelector('#openNavbar');
    let closeButton = document.querySelector('#closeNavbar');
    if (openButton && closeButton) {
      openButton.classList.remove('hide');
      closeButton.classList.add('hide');
    }
  }

  showCloseButton() {
    let openButton = document.querySelector('#openNavbar');
    let closeButton = document.querySelector('#closeNavbar');
    if (openButton && closeButton) {
      openButton.classList.add('hide');
      closeButton.classList.remove('hide');
    }
  }

}




    