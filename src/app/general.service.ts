import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  navbarOpened = false;

  showOpenButton() {
    this.navbarOpened = false;
  }

  showCloseButton() {
    this.navbarOpened = true;
  }  

  // showOpenButton() {
  //   let openButton = document.querySelector('#openNavbar');
  //   let closeButton = document.querySelector('#closeNavbar');
  //   if (openButton && closeButton) {
  //     openButton.classList.remove('hide');
  //     closeButton.classList.add('hide');
  //   }
  // }

  // showCloseButton() {
  //   let openButton = document.querySelector('#openNavbar');
  //   let closeButton = document.querySelector('#closeNavbar');
  //   if (openButton && closeButton) {
  //     openButton.classList.add('hide');
  //     closeButton.classList.remove('hide');
  //   }
  // }
  
}
