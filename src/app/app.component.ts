import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  languageChoose: string;
  
  constructor(private translate: TranslateService) {
    this.languageChoose = navigator.language;
    this.updateLanguageApplication();
  }

  changeLanguage(langSelected: string){
    this.languageChoose = langSelected;
    this.updateLanguageApplication();
  }

  updateLanguageApplication(){
    if(this.languageChoose.includes("-")){
      this.languageChoose = ((this.languageChoose.split("-"))[0]);
    }
    this.translate.setDefaultLang(this.languageChoose);
    this.translate.use(this.languageChoose);
  }

}
