import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SearchComponent } from './components/search/search.component';
import { TouComponent } from './components/tou/tou.component';
import { CarWorkComponent } from './components/car-work/car-work.component';


const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signin', component: LoginComponent },
  { path : 'signup', component: SignupComponent},
  { path : 'search', component: SearchComponent},
  { path : 'tou', component: TouComponent},
  { path : 'carwork', component: CarWorkComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
