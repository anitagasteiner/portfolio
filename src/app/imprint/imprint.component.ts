import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

  constructor() {
    this.scrollToTop();    
  }

  scrollToTop() {
    window.scrollTo(
      {
        top: 0,
        // behavior: 'smooth'
      }
    );
  }

}
