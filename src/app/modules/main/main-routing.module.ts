import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { EducationComponent } from './education/education.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';

const mainRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'sobre-mi',
    component: AboutMeComponent,
  },
  {
    path: 'estudios',
    component: EducationComponent,
  },
  {
    path: 'portafolio',
    component: PortfolioComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'contacto',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
