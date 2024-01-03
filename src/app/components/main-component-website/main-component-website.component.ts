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
  nameShowComponent: string = "aboutMe";
  showDropdown: boolean = false;

  constructor(private translate: TranslateService){

  }

  ngOnInit(): void {
  }

  showComponent(componentToShow: string){
    this.nameShowComponent = componentToShow;
  }

  changeLanguage(language: string){
    this.newLanguage.emit(language);
  }

}
