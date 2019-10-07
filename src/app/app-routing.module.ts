import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_helpers';

import { AboutmeComponent } from './aboutme/aboutme.component';
import { CurrentWorkComponent } from './current-work/current-work.component';
import { EducationComponent } from './education/education.component';
import { RoverComponent } from './rover/rover.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
{ path: '', component: LoginComponent },
{ path: 'currentWork', component: CurrentWorkComponent },
{ path: 'education', component: EducationComponent },
{ path: 'rover', component: RoverComponent },
{ path: 'home', component: HomeComponent },
{ path: 'aboutme', component: AboutmeComponent },
{ path: 'blog', component: BlogComponent, canActivate: [AuthGuard] },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'test', component: TestComponent },
// otherwise redirect to home
{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
