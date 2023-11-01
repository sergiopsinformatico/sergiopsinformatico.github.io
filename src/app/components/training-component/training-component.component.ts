import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-training-component',
  templateUrl: './training-component.component.html',
  styleUrls: ['./training-component.component.css']
})
export class TrainingComponentComponent {

  constructor(private translate: TranslateService){

  }

}
