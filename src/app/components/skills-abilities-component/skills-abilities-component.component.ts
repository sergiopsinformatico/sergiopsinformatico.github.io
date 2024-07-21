import { Component, EventEmitter, Output } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import { MyAppServicesService } from '../../service/my-app-services.service';

@Component({
  selector: 'app-skills-abilities-component',
  templateUrl: './skills-abilities-component.component.html',
  styleUrls: ['./skills-abilities-component.component.css']
})
export class SkillsAbilitiesComponentComponent {

  constructor(private translate: TranslateService,
              private myAppService: MyAppServicesService){

  }

  getListAbbilities(){
    return this.myAppService.getMyConfig().getListAbbilities();
  }
  
}
