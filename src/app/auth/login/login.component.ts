import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app.state';
import * as AuthActions from '../../../actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm;
  public token;


  login(loginForm) {
    if (loginForm.valid) {
      this.authService.loginUser(loginForm.value).subscribe((result: any) => {
        if (result.status === true) {
          this.token = result.token;
          localStorage.clear();
          localStorage.setItem('token', this.token),
          this.store.dispatch(new AuthActions.SetToken(this.token));
          this.store.dispatch(new AuthActions.LogIn());
          this.router.navigate(['home']);
          loginForm.value = false;
        } else if (result.status === false) {
          this.store.dispatch(new AuthActions.Reset());
          alert('Wrong email or passord, Please try again');
        }
      });
    }
  }

  constructor(private fb: FormBuilder, private router: Router,
              private authService: AuthService, private store: Store<AppState>) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

}
