import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/entities/user';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

// perkeliau validation cia, bet jei ka galim betkada padaryt atgal kaip buvo 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // @ViewChild('g-recaptcha-response') recaptcha: ElementRef;
  // public registerForm;
  // public captcha = this.elRef.nativeElement.querySelector('g-recaptcha-response');

  public name;
  public email;
  public password;
  public captcha;
  register(registerForm) {
    this.captcha = document.querySelector('#g-recaptcha-response').value;
    // console.log(this.recaptcha.nativeElement.value);
    // console.log(document.querySelector('#g-recaptcha-response').value); // yra value nx
    // registerForm.captcha = document.querySelector('#g-recaptcha-response').value;
    if (registerForm.valid) {

      registerForm.name = this.name;
      registerForm.email = this.email;
      registerForm.password = this.password;
      registerForm.captcha = this.captcha;
      // registerForm.captcha = "123445";

      const user: User = registerForm.value;
      this.authService.registerUser(user).subscribe(() => this.router.navigate(['login']));
    } else {
      // cia koki modal galesim parodyti, bet kolkas alert
      alert('bad credentials');
    }
  }

  constructor(private fb: FormBuilder, private router: Router,
              private authService: AuthService, private elRef: ElementRef) { }

  ngOnInit() {
    // this.registerForm = this.fb.group({
    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', Validators.required],
    //   name: ['', Validators.required],
    //   captcha: ['', Validators.required],
    // });
  }

}
