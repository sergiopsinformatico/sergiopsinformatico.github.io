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
  constructor(private translate: TranslateService){
  }

  ngOnInit(): void {
  }

  changeLanguage(language: string){
    this.newLanguage.emit(language);
  }

  changeActive(idNavBar: string){
    //Update Active Navbar
    document.getElementById('btn-nav-aboutMe')?.classList.remove('active');
    document.getElementById('btn-nav-training')?.classList.remove('active');
    document.getElementById('btn-nav-experience')?.classList.remove('active');
    document.getElementById('btn-nav-abbilities')?.classList.remove('active');

    document.getElementById(idNavBar)?.classList.add('active');
  }

}
