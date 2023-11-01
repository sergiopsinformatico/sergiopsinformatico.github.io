import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-main-component-website',
  templateUrl: './main-component-website.component.html',
  styleUrls: ['./main-component-website.component.css']
})

export class MainComponentWebsiteComponent implements OnInit{

  //Variables
  mainTitle = "Mi Pagina Personal";

  constructor(private translate: TranslateService){

  }

  ngOnInit(): void {
  }

  onActiveItemChange(event: any){
    console.log(event);
  }

}
