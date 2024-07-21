import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-main-component-website',
  templateUrl: './main-component-website.component.html',
  styleUrls: ['./main-component-website.component.css']
})

export class MainComponentWebsiteComponent implements OnInit{

  @Output() newLanguage = new EventEmitter<string>();

  //Variables
  showSectionAboutMe:boolean = false;
  showSectionTraining:boolean = false;
  showSectionExperience:boolean = false;
  showSectionAbbilities:boolean = false;

  constructor(private translate: TranslateService){
  }

  ngOnInit(): void {
  }

  changeLanguage(language: string){
    this.newLanguage.emit(language);
  }

  openSection(sectionName: string){
    switch(sectionName){
      case 'aboutMe':{
        this.showSectionAboutMe = !this.showSectionAboutMe;
        this.showSectionTraining = false;
        this.showSectionExperience = false;
        this.showSectionAbbilities = false;
        break;
      }
      case 'training':{
        this.showSectionAboutMe = false;
        this.showSectionTraining = !this.showSectionTraining;
        this.showSectionExperience = false;
        this.showSectionAbbilities = false;
        break;
      }
      case 'professionalExperience':{
        this.showSectionAboutMe = false;
        this.showSectionTraining = false;
        this.showSectionExperience = !this.showSectionExperience;
        this.showSectionAbbilities = false;
        break;
      }
      case 'skillsAbilities':{
        this.showSectionAboutMe = false;
        this.showSectionTraining = false;
        this.showSectionExperience = false;
        this.showSectionAbbilities = !this.showSectionAbbilities;
        break;
      }
    }
  }

}
