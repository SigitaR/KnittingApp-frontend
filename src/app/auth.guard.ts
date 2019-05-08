
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, Router } from '@angular/router';
import { Observable } from 'rxjs';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private routes: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const token = localStorage.getItem('token'); // getting token from local storage
    if (token != null && this.TokenNotExpired(token) ) { // checks if token exists and if token is expired
      return true;
    } else {
      this.routes.navigate(['/login']);
      return false;
    }
  }

  public TokenNotExpired(token) {  // checks if token is expired
   const decodenToken = decode(token);
   const expiration = decodenToken.exp;
   const currentTime =  Date.now();
   const isExpired = new Date(expiration) <= new Date(currentTime); // comparing two unix dates
   console.log(isExpired);
   return isExpired;
  }

}
