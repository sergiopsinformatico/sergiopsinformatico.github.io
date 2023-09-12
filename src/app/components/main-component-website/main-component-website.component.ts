import { Component, OnInit } from '@angular/core';
import { MyTranslateWebsiteService } from 'src/app/service/my-translate-website.service';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-main-component-website',
  templateUrl: './main-component-website.component.html',
  styleUrls: ['./main-component-website.component.css']
})

export class MainComponentWebsiteComponent implements OnInit{

  //Variables
  mainTitle = "Mi Pagina Personal";

  constructor(private theTranslate: MyTranslateWebsiteService){
    
  }

  ngOnInit(): void {
  }

  onActiveItemChange(event: any){
    console.log(event);
  }

}
