import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { CurrentWorkComponent } from './current-work/current-work.component';
import { EducationComponent } from './education/education.component';
import { RoverComponent } from './rover/rover.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
	{ path: '', component: BlogComponent },
	{ path: 'currentWork', component: CurrentWorkComponent },
	{ path: 'education', component: EducationComponent },
	{ path: 'rover', component: RoverComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'aboutme', component: AboutmeComponent },
	{ path: 'blog', component: BlogComponent },
	{ path: 'test', component: TestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
