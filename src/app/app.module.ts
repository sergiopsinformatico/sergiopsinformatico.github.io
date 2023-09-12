import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyTranslateWebsiteService } from './service/my-translate-website.service';
import { MainComponentWebsiteComponent } from './components/main-component-website/main-component-website.component';

import { TabMenuModule } from 'primeng/tabmenu';

@NgModule({
  declarations: [
    AppComponent,
    MainComponentWebsiteComponent
  ],
  imports: [
    BrowserModule,
    TabMenuModule
  ],
  providers: [MyTranslateWebsiteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
