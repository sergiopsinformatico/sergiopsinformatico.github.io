import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyTranslateWebsiteService } from './service/my-translate-website.service';
import { MainComponentWebsiteComponent } from './components/main-component-website/main-component-website.component';

//Import Material Angular
import { MatTabsModule } from '@angular/material/tabs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutMeComponentComponent } from './components/about-me-component/about-me-component.component';
import { ProfessionalExperienceComponentComponent } from './components/professional-experience-component/professional-experience-component.component';
import { TrainingComponentComponent } from './components/training-component/training-component.component';
import { SkillsAbilitiesComponentComponent } from './components/skills-abilities-component/skills-abilities-component.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponentWebsiteComponent,
    AboutMeComponentComponent,
    ProfessionalExperienceComponentComponent,
    TrainingComponentComponent,
    SkillsAbilitiesComponentComponent
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
