import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { EducationComponent } from './education/education.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { MainRoutingModule } from './main-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    AboutMeComponent,
    EducationComponent,
    PortfolioComponent,
    BlogComponent,
    ContactComponent
  ],
  imports: [
    MainRoutingModule,
    CommonModule
  ]
})
export class MainModule { }
