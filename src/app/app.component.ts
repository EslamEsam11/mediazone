
import {  Component } from '@angular/core';
import { RouterLink, RouterModule,  } from '@angular/router';


import { ProjectsComponent } from './components/projects/projects.component';
import { HomeComponent } from './home/home.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterLink ,ProjectsComponent , HomeComponent , RouterModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent   {

  
}













