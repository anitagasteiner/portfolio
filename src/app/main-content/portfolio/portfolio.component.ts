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
      date: "11/2024",
      image: "./../../../assets/img/demon_woods_mobile.png",
      title: "Demon Woods",
      skills: "HTML | CSS | JavaScript | Git | Objektorientierung",
      description: "Jump and Run Game. Simple game based on an object-oriented approach. Help the fairy to collect hearts and stones to fight against wraiths and a demon.",
      position: "right",
      link: "https://github.com/anitagasteiner/demon_woods"
    },
    {
      date: "07/2024",
      image: "./../../../assets/img/join_mobile.png",
      title: "Join",
      skills: "HTML | CSS | JavaScript | Git | Firebase",
      description: "Project Management Tool. Task manager inspired by the kanban system. Create and organize tasks using drag and drop functions, assign users and categories.",
      position: "left",
      link: "https://github.com/anitagasteiner/join-239-final"
    },
    {
      date: "05/2024",
      image: "./../../../assets/img/pokedex_mobile.png",
      title: "Pokédex",
      skills: "HTML | CSS | JavaScript | Git | API",
      description: "Pokémon Register. Click through the different pokémon characters and get information about them.",
      position: "right",
      link: "https://github.com/anitagasteiner/Pokedex"
    },
    {
      date: "04/2024",
      image: "./../../../assets/img/instaclone_mobile.png",
      title: "Instaclone",
      skills: "HTML | CSS | JavaScript",
      description: "Social Network. Post what you would like to say, like and comment other posts or add a new user.",
      position: "left",
      link: ""
    }
  ];

}
