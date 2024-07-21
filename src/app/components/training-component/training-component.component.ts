import { Component, EventEmitter, Output } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import { MyAppServicesService } from '../../service/my-app-services.service';

@Component({
  selector: 'app-training-component',
  templateUrl: './training-component.component.html',
  styleUrls: ['./training-component.component.css']
})
export class TrainingComponentComponent {

  constructor(private translate: TranslateService,
              private myAppService: MyAppServicesService){

  }

  getListUniversityTraining(){
    return this.myAppService.getMyConfig().getListUniversityTraining();
  }

  getListOtherTraining(){
    return this.myAppService.getMyConfig().getListOtherTraining();
  }

}
