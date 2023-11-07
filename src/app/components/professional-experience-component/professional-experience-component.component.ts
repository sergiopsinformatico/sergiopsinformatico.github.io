import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import { MyAppServicesService } from '../../service/my-app-services.service';

@Component({
  selector: 'app-professional-experience-component',
  templateUrl: './professional-experience-component.component.html',
  styleUrls: ['./professional-experience-component.component.css']
})

export class ProfessionalExperienceComponentComponent{


  constructor(private translate: TranslateService,
    private myAppService: MyAppServicesService){

  }

  getListExperiences(){
    return this.myAppService.getMyConfig().getListExperiences();
  }

}
