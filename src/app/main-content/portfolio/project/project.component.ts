import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements AfterViewInit {

  @Input() project = {
    id: 4,
    date: "11/2024",
    image: "./../../../assets/img/demon_woods_mobile.png",
    title: "Demon Woods",
    skills: "HTML | CSS | JavaScript | Git | Objektorientierung",
    description: "Jump and Run Game. Simple game based on an object-oriented approach. Help the fairy to collect hearts and stones to fight against wraiths and a demon.",
    position: "right",
    link: "https://github.com/anitagasteiner/demon_woods"
  };

  options = {
    threshold: 1
  };

  observer1: IntersectionObserver | undefined;
  observer2: IntersectionObserver | undefined;
  observer3: IntersectionObserver | undefined;
  observer4: IntersectionObserver | undefined;

  constructor() { }

  ngAfterViewInit(): void {
    this.observer1 = new IntersectionObserver(this.callback1, this.options);
    this.observer2 = new IntersectionObserver(this.callback2, this.options);
    this.observer3 = new IntersectionObserver(this.callback3, this.options);
    this.observer4 = new IntersectionObserver(this.callback4, this.options);

    const target1 = document.querySelector('#project-1');
    const target2 = document.querySelector('#project-2');
    const target3 = document.querySelector('#project-3');
    const target4 = document.querySelector('#project-4');

    if (target1) {
      this.observer1.observe(target1);
    }

    if (target2) {
      this.observer2.observe(target2);
    }

    if (target3) {
      this.observer3.observe(target3);
    } 

    if (target4) {
      this.observer4.observe(target4);
    } 
  }

  callback1 = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.addClassName('visible');
      }
      // } else {
      //   this.removeClassName('visible');
      // }
    });
  };

  callback2 = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.addClassName('visible');
      }
      // } else {
      //   this.removeClassName('visible');
      // }
    });
  };

  callback3 = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.addClassName('visible');
      }
      // } else {
      //   this.removeClassName('visible');
      // }
    });
  };

  callback4 = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.addClassName('visible');
      }
      // } else {
      //   this.removeClassName('visible');
      // }
    });
  };

  addClassName(className: string): void {
    const target1 = document.querySelector('#project-1');
    const target2 = document.querySelector('#project-2');
    const target3 = document.querySelector('#project-3');
    const target4 = document.querySelector('#project-4');
    if (target1) {
      target1.classList.add(className);
    }
    if (target2) {
      target2.classList.add(className);
    }
    if (target3) {
      target3.classList.add(className);
    }
    if (target4) {
      target4.classList.add(className);
    }
  }

  // removeClassName(className: string): void {
  //   const target = document.querySelector('project-1');
  //   if (target) {
  //     target.classList.remove(className);
  //   }
  // }

}