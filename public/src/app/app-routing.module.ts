import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ResumePageComponent } from './resume-page/resume-page.component';
import { SkillsPageComponent } from './skills-page/skills-page.component';
import { ArtPageComponent } from './art-page/art-page.component';



const routes: Routes = [
  { path: '', pathMatch:'full', component: HomePageComponent},
  {path: 'projects', component: ProjectsPageComponent},
  {path: 'skills', component: SkillsPageComponent},
  {path: 'resume', component: ResumePageComponent},
  {path: 'art', component: ArtPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

