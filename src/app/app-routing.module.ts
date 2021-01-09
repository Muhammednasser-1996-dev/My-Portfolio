import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
 {path:"", redirectTo:"home", pathMatch:"full"},
 {path:"home", component:HomeComponent},
 {path:"about", component:AboutComponent},
 {path:"skills", component:SkillsComponent},
 {path:"portfolio", component:PortfolioComponent},
 {path:"service", component:ServicesComponent},
 {path:"contact", component:ContactComponent},
 {path:"**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
