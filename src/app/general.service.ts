import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  navbarOpened: boolean = false;
  btnAnimationSources: string[] = ['assets/img/btn-progress-1.svg', 'assets/img/btn-progress-2.svg', 'assets/img/btn-progress-3.svg'];
  currentBtnNo: number = 0;
  currentBtn: string = '';

  imageAnimation() {
    let i = this.currentBtnNo % this.btnAnimationSources.length;
    this.currentBtn = this.btnAnimationSources[i];
    this.currentBtnNo++;
  }

  showBtnOpen() {
    this.currentBtn = 'assets/img/btn-open.svg';
    this.navbarOpened = false;
  }

  showBtnClose() {
    this.currentBtn = 'assets/img/btn-close.svg';
    this.navbarOpened = true;
  }
  
}
