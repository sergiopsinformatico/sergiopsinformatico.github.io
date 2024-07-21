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

}
