import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-about-me-component',
  templateUrl: './about-me-component.component.html',
  styleUrls: ['./about-me-component.component.css']
})
export class AboutMeComponentComponent {
  
  constructor(private translate: TranslateService){

  }

}
