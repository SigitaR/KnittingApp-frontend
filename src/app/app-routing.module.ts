import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';


const  routes: Routes  = [
 { path: '', loadChildren: './auth/auth.module#AuthModule' },
 { path: 'home', component: HomeComponent },
 { path: '**', component: PageNotFoundComponent },
  // { path: 'register', component: RegisterComponent },
  // { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
