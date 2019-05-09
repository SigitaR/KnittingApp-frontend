import { Component, OnChanges, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import decode from 'jwt-decode';
import { AuthService } from 'src/services/auth.service';
import { Auth } from 'src/entities/auth';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app.state';
import * as AuthActions from '../../actions/auth.actions';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {


  auth: Observable<Auth>;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService,
              private store: Store<AppState>) {
                this.auth = this.store.select('auth');
              }
  ngOnInit(): void {
    this.auth = this.store.select('auth');
  }
}
