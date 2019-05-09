
import { Injectable, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, Router } from '@angular/router';
import { Observable } from 'rxjs';
import decode from 'jwt-decode';
import { AppState } from 'src/app.state';
import { Store } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, OnInit {

  //  now = new Date();
  constructor(private routes: Router, private store: Store<AppState>) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const token = localStorage.getItem('token'); // getting token from local storage
    if (token != null && this.TokenNotExpired(token) ) { // checks if token exists and if token is expired
      return true;
    } else {
      localStorage.setItem('token', null);
      this.store.dispatch(new AuthActions.SetToken(null));
      this.store.dispatch(new AuthActions.LogOut());
      alert('token expired');
      this.routes.navigate(['/login']);
      return false;
    }
  }

  public TokenNotExpired(token) {  // checks if token is expired
   const decodenToken = decode(token);
   const expirationUnix = decodenToken.exp;
   const expiration = new Date(expirationUnix * 1000);
   const currentTime = new Date();
   return expiration > currentTime;
  }
    ngOnInit(): void {

  }

}
