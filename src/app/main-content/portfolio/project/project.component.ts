import { Component, Input, AfterViewInit, inject } from '@angular/core';
import { GeneralService } from '../../../general.service';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements AfterViewInit {

  generalService = inject(GeneralService);

  @Input()project = {
    id: 4,
    date: "11/2024",
    image: "./../../../assets/img/demon_woods_mobile.png",
    orientation: "landscape",
    title: "Demon Woods",
    skills: "HTML | CSS | JavaScript | Git | Objektorientierung",
    description: "Jump and Run Game. Simple game based on an object-oriented approach. Help the fairy to collect hearts and stones to fight against wraiths and a demon.",
    descriptionGerman: "Jump-and-Run-Spiel. Einfaches Spiel auf Basis eines objektorientierten Zugangs. Hilf der Fee Herzen und Steine zu sammeln, um gegen Geister und einen Demonen zu kämpfen.",
    position: "right",
    gitLink: "https://github.com/anitagasteiner/demon_woods",
    webLink: ""
  };

  options = {
    // threshold: 0.8
    threshold: 1
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
        this.addClassNames('appear', 'color');
      }
    });
  };

  addClassNames(className1: string, className2: string): void {
    const project = document.querySelector('#project-' + this.project.id);
    const image = document.querySelector('#project-' + this.project.id + '-image');
    const border = document.querySelector('#project-' + this.project.id + '-border');
    const arrow = document.querySelector('#project-' + this.project.id + '-arrow');
    if (project) {
      project.classList.add(className1);      
    }
    if (image) {
      image.classList.add(className2);
    }
    if (border) {
      border.classList.add(className2);
    }
    if (arrow) {
      arrow.classList.add(className2);
    }
  }

}