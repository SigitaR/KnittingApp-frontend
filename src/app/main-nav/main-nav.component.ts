import { Component, OnChanges, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import decode from 'jwt-decode';
import { Auth } from 'src/entities/auth';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app.state';
import * as AuthActions from '../../actions/auth.actions';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
   now = new Date();
   auth: Observable<Auth>;
   token = localStorage.getItem('token');

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private store: Store<AppState>, private router: Router,
              private authService: AuthService) {
                this.auth = this.store.select('auth');
              }
  ngOnInit(): void {
    this.auth = this.store.select('auth');
  }

  logout() {
    localStorage.setItem('token', null);
    this.store.dispatch(new AuthActions.SetToken(null));
    this.store.dispatch(new AuthActions.LogOut());
    this.router.navigate(['home']);
    this.authService.logout();
  }
}
