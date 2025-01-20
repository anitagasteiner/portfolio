import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements AfterViewInit {

  @Input()project = {
    id: 4,
    date: "11/2024",
    image: "./../../../assets/img/demon_woods_mobile.png",
    orientation: "landscape",
    title: "Demon Woods",
    skills: "HTML | CSS | JavaScript | Git | Objektorientierung",
    description: "Jump and Run Game. Simple game based on an object-oriented approach. Help the fairy to collect hearts and stones to fight against wraiths and a demon.",
    position: "right",
    link: "https://github.com/anitagasteiner/demon_woods"
  };

  options = {
    threshold: 0.8
  };

  observer: IntersectionObserver | undefined;

  constructor() { }

  ngAfterViewInit(): void {    
    this.observer = new IntersectionObserver(this.callback, this.options);
    const project = document.querySelector('#project-' + this.project.id);
    if (project) {
      this.observer.observe(project);
    }
  }

  callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.addClassNames('visible', 'colored', 'framed');
      }
      // } else {
      //   this.removeClassName('visible');
      // }
    });
  };

  addClassNames(className1: string, className2: string, className3: string): void {
    const project = document.querySelector('#project-' + this.project.id);
    const image = document.querySelector('#project-' + this.project.id + '-image');
    const border = document.querySelector('#project-' + this.project.id + '-border');
    if (project) {
      project.classList.add(className1);      
    }
    if (image) {
      image.classList.add(className2);
    }
    if (border) {
      border.classList.add(className3);
    }
  }

  // removeClassName(className: string): void {
  //   const target = document.querySelector('project-1');
  //   if (target) {
  //     target.classList.remove(className);
  //   }
  // }

}