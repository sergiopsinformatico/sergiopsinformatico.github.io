import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponentWebsiteComponent } from './components/main-component-website/main-component-website.component';

//Import Material Angular
import { MatTabsModule } from '@angular/material/tabs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutMeComponentComponent } from './components/about-me-component/about-me-component.component';
import { ProfessionalExperienceComponentComponent } from './components/professional-experience-component/professional-experience-component.component';
import { TrainingComponentComponent } from './components/training-component/training-component.component';
import { SkillsAbilitiesComponentComponent } from './components/skills-abilities-component/skills-abilities-component.component';

//Translate
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { MyAppServicesService } from './service/my-app-services.service';

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
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  providers: [MyAppServicesService],
  bootstrap: [AppComponent]
})

export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
