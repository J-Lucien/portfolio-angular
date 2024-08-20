import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'home',component: HomeComponent},
    {path:'about-me',component:AboutMeComponent},
    {path:'contact',component:ContactComponent}
];
