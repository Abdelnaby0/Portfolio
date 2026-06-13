import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './main/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AboutPageComponent } from './main/about-page/about-page.component';
import { ProjectsComponent } from './main/projects/projects.component';
import { ContactComponent } from './main/contact/contact.component';
import { IndicatorComponent } from './shared/indicator/indicator.component';
import { SkillsComponent } from './main/skills/skills.component';
import { WorksComponent } from './main/works/works.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutPageComponent,
    ProjectsComponent,
    ContactComponent,
    IndicatorComponent,
    SkillsComponent,
    WorksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
