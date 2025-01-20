import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    CommonModule,
    ProjectComponent
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  projects = [
    {
      id: 4,
      date: "11/2024",
      image: "./../../../assets/img/demon-woods-mobile.png",
      title: "Demon Woods",
      skills: "HTML | CSS | JavaScript | Git | Objektorientierung",
      description: "Jump and Run Game. Simple game based on an object-oriented approach. Help the fairy to collect hearts and stones to fight against wraiths and a demon.",
      position: "right",
      link: "https://github.com/anitagasteiner/demon_woods"
    },
    {
      id: 3,
      date: "07/2024",
      image: "./../../../assets/img/join-mobile.png",
      title: "Join",
      skills: "HTML | CSS | JavaScript | Git | Firebase",
      description: "Project Management Tool. Task manager inspired by the kanban system. Create and organize tasks using drag and drop functions, assign users and categories.",
      position: "left",
      link: "https://github.com/anitagasteiner/join-239-final"
    },
    {
      id: 2,
      date: "05/2024",
      image: "./../../../assets/img/pokedex-mobile.png",
      title: "Pokédex",
      skills: "HTML | CSS | JavaScript | Git | API",
      description: "Pokémon Register. Click through the different pokémon characters and get information about them.",
      position: "right",
      link: "https://github.com/anitagasteiner/Pokedex"
    },
    {
      id: 1,
      date: "04/2024",
      image: "./../../../assets/img/instaclone-mobile.png",
      title: "Instaclone",
      skills: "HTML | CSS | JavaScript",
      description: "Social Network. Post what you would like to say, like and comment other posts or add a new user.",
      position: "left",
      link: ""
    }
  ];

  // constructor(private readonly data: DataService) {}

  // readonly callback = this.data.callback.bind(this.data, 'projects')

}