import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import { MyAppServicesService } from './service/my-app-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  languageChoose: string;
  loadComponent: boolean = false;
  
  constructor(
    private translate: TranslateService,
    private myAppService: MyAppServicesService
  ) {
      this.myAppService.loadMyConfig().subscribe(eConfig =>{
        this.myAppService.setConfig(eConfig);
        this.loadComponent = true;
      });
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
