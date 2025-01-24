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

}
