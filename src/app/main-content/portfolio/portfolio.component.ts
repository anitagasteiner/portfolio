import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { GeneralService } from '../../general.service';

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

  generalService = inject(GeneralService);

  projects = [
    {
      id: 4,
      date: "11/2024",
      image: "./../../../assets/img/demon-woods-mobile.png",
      orientation: "landscape",
      title: "Demon Woods",
      skills: "HTML | CSS | JavaScript | Git | OOP",
      description: "Jump and Run Game. Simple game based on an object-oriented approach. Help the fairy to collect hearts and stones to fight against wraiths and a demon.",
      descriptionGerman: "Jump-and-Run-Spiel. Einfaches Spiel auf Basis eines objektorientierten Zugangs. Hilf der Fee Herzen und Steine zu sammeln, um gegen Geister und einen Demonen zu kämpfen.",
      position: "right",
      gitLink: "https://github.com/anitagasteiner/demon_woods",
      webLink: "https://anita-gasteiner.developerakademie.net/demon_woods"
    },
    {
      id: 3,
      date: "07/2024",
      image: "./../../../assets/img/join-mobile.png",
      orientation: "portrait",
      title: "Join",
      skills: "HTML | CSS | JavaScript | Git | Firebase",
      description: "Project Management Tool. Task manager inspired by the kanban system. Create and organize tasks using drag and drop functions, assign users and categories.",
      descriptionGerman: "Projektmanagement-Tool. Eine Aufgabenverwaltung nach dem Kanban-System. Erstellen und organisieren Sie Aufgaben mithilfe von Drag and Drop und weisen Sie diesen Personen und Kategorien zu.",
      position: "left",
      gitLink: "https://github.com/anitagasteiner/join-239-final",
      webLink: "https://join-239.developerakademie.net"
    },
    {
      id: 2,
      date: "05/2024",
      image: "./../../../assets/img/pokedex-mobile.png",
      orientation: "portrait",
      title: "Pokédex",
      skills: "HTML | CSS | JavaScript | Git | API",
      description: "Pokémon Register. Click through the different pokémon characters and get information about them.",
      descriptionGerman: "Pokémon-Verzeichnis. Klicken Sie sich durch die verschiedenen Pokémon-Charaktere und erhalten Sie Informationen über sie.",
      position: "right",
      gitLink: "https://github.com/anitagasteiner/Pokedex",
      webLink: "https://anita-gasteiner.developerakademie.net/pokedex"
    },
    {
      id: 1,
      date: "04/2024",
      image: "./../../../assets/img/instaclone-mobile.png",
      orientation: "portrait",
      title: "Instaclone",
      skills: "HTML | CSS | JavaScript",
      description: "Social Network. Post what you would like to say, like and comment other posts or add a new user.",
      descriptionGerman: "Soziales Netzwerk. Erstellen Sie Beiträge, vergeben Sie Likes und kommentieren Sie andere Beiträge oder fügen Sie Personen hinzu.",
      position: "left",
      gitLink: "https://github.com/anitagasteiner/instaclone",
      webLink: "https://anita-gasteiner.developerakademie.net/instaclone"
    }
  ];

}