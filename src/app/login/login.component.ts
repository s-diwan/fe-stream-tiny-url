import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { DataSharedService } from '../services/data-shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor( private snackBar: MatSnackBar, private dataShare: DataSharedService,
               private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }

  get f(): any { return this.loginForm.controls; }

  login(): void {
    this.authService.login(
      {
        username: this.f.username.value.toLowerCase(),
        password: this.f.password.value
      }
    )
    .subscribe(success => {
      if (success) {
        this.openSnackBar('Login Successful', 'Success');
        this.dataShare.setLoginFlag(true);
        this.router.navigate(['/landing']);
      }
      else{
        this.openSnackBar('Invalid Username and Password', 'Failed');
      }
    },
    err => {
        this.openSnackBar(err.error.message, 'Failed');
      });
    }
    openSnackBar(message, action): any {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
