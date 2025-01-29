import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

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
