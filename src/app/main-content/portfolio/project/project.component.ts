import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

    @Input()project = {
      date: "11/2024",
      image: "./../../../assets/img/demon_woods_mobile.png",
      title: "Demon Woods",
      skills: "HTML | CSS | JavaScript | Git | Objektorientierung",
      description: "Jump and Run Game. Simple game based on an object-oriented approach. Help the fairy to collect hearts and stones to fight against wraiths and a demon.",
      position: "right",
      link: "https://github.com/anitagasteiner/demon_woods"
    };

}
