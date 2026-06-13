import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { AboutPageComponent } from './main/about-page/about-page.component';
import { ProjectsComponent } from './main/projects/projects.component';
import { ContactComponent } from './main/contact/contact.component';
import { SkillsComponent } from './main/skills/skills.component';
import { WorksComponent } from './main/works/works.component';

const routes: Routes = [
  {  path:"" , redirectTo:"home" , pathMatch:"full"},
  {  path:"home" ,title:"Mahmoud's Portfolio | Home" ,component:HomeComponent},
  {  path:"about" ,title:"Mahmoud's Portfolio | About" , component:AboutPageComponent},
  {  path:"projects" ,title:"Mahmoud's Portfolio | Projects" , component:ProjectsComponent},
  {  path:"contact" ,title:"Mahmoud's Portfolio | Contact" , component:ContactComponent},
  {  path:"skills" ,title:"Mahmoud's Portfolio | Skills" , component:SkillsComponent},
  {  path:"works" ,title:"Mahmoud's Portfolio | All Projects" , component:WorksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
