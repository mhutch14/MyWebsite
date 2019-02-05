import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { CurrentWorkComponent } from './current-work/current-work.component';
import { EducationComponent } from './education/education.component';
import { RoverComponent } from './rover/rover.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'aboutMe', component: AboutmeComponent },
	{ path: 'currentWork', component: CurrentWorkComponent },
	{ path: 'education', component: EducationComponent },
	{ path: 'rover', component: RoverComponent },
	{ path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
