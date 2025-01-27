import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
// import { MainContentComponent } from '../../../main-content/main-content.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent
    // MainContentComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  handleNavbar() {
    let navbar = document.querySelector('#navbar');
    let scrollbar = document.querySelector('#body');
    if (navbar) {
      navbar.classList.toggle('hide');      
    }
    if (scrollbar) {
      scrollbar.classList.toggle('hideOverflow');
    }
  }

  handleButton() {
    let openButton = document.querySelector('#openNavbar');
    let closeButton = document.querySelector('#closeNavbar');
    if (openButton && closeButton) {
      openButton.classList.toggle('hide');
      closeButton.classList.toggle('hide');
    }
  }

}




    