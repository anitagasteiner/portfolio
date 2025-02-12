import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  navbarOpened: boolean = false;
  openNavbarBtnSources: string[] = [
    'assets/img/btn-progress-1.svg',
    'assets/img/btn-progress-2.svg',
    'assets/img/btn-progress-3.svg'
  ];
  closeNavbarBtnSources: string[] = [
    'assets/img/btn-progress-3.svg',
    'assets/img/btn-progress-2.svg',
    'assets/img/btn-progress-1.svg'
  ]
  currentBtnNo: number = 0;
  currentBtn: string = '';
  imageIntervalId: number = 0;

  currentLanguage: string = 'de';

  btnText: string = 'Nachricht senden';
  nameText: string = 'Ihr Name';
  mailText: string = 'Ihre E-Mail-Adresse';
  messageText: string = 'Ihre Nachricht';

  imageAnimation(sources: string[]) {
    let i = this.currentBtnNo % sources.length;
    this.currentBtn = sources[i];
    this.currentBtnNo++;
  }

  startImageTransition() {
    if (!this.navbarOpened) {
      this.imageTransition(this.openNavbarBtnSources, true);
    } else {
      this.imageTransition(this.closeNavbarBtnSources, false);
    }
  }

  imageTransition(sources: string[], trueFalse: boolean) {
    this.imageIntervalId = window.setInterval(() => {
      this.imageAnimation(sources);
      setTimeout(() => {
        this.stopImageTransition();
        this.navbarOpened = trueFalse;
        this.showBtn();
      }, 300);
    }, 500);

  }

  stopImageTransition() {
    clearInterval(this.imageIntervalId);
  }

  showBtn() {
    if (this.navbarOpened) {
      this.currentBtn = 'assets/img/btn-close.svg';
    } else {
      this.currentBtn = 'assets/img/btn-open.svg';
    }
  }

  scrollToTop() {
    window.scrollTo(
      {
        top: 0
      }
    );
  }

  setBtnText() {
    if (this.currentLanguage == 'de') {
      this.btnText = 'Nachricht senden';
    } else if (this.currentLanguage == 'en') {
      this.btnText = 'Send message';
    }
  }

  setPlaceholders() {
    if (this.currentLanguage == 'de') {
      this.nameText = 'Ihr Name';
      this.mailText = 'Ihre E-Mail-Adresse';
      this.messageText = 'Ihre Nachricht';
    } else if (this.currentLanguage == 'en') {
      this.nameText = 'Your name';
      this.mailText = 'Your mail';
      this.messageText = 'Your message';
    }
  }
  
}
