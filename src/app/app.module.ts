import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyTranslateWebsiteService } from './service/my-translate-website.service';
import { MainComponentWebsiteComponent } from './components/main-component-website/main-component-website.component';

//Import Material Angular
import { MatTabsModule } from '@angular/material/tabs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    MainComponentWebsiteComponent
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [MyTranslateWebsiteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
