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
    this.generalService.scrollToTop();
  }

}
