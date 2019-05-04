import { Component, OnInit } from '@angular/core';
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
  public registerForm;

  register(registerForm) {
    if (registerForm.valid) {
      const user: User = registerForm.value;
      this.authService.registerUser(user).subscribe();
      registerForm.value = false;
      setTimeout(() => {
        this.router.navigate(['login']);
      }, 2000); // siektiek timeout
    } else {
      // cia koki modal galesim parodyti
    }
  }

  constructor(private fb: FormBuilder, private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      name: ['', Validators.required],
    });
  }

}
