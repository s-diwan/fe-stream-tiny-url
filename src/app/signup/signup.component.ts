import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SignUpService } from '../services/sign-up.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private snackBar: MatSnackBar, private signUpService: SignUpService,
              private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      firstName: [''],
      lastName:  [''],
      gender:    [''],
      email:     [''],
      password:  ['']
    });
  }

  get f(): any { return this.signUpForm.controls; }

  signup(): void {
    this.signUpService.signup(
      {
        firstName: this.f.firstName.value,
        lastName: this.f.lastName.value,
        gender: this.f.gender.value,
        email: this.f.email.value.toLowerCase(),
        password: this.f.password.value
      }
    )
    .subscribe(
      success => {
        this.openSnackBar('Sign Up Successful', 'Login to Continue');
        this.router.navigate(['/login']);
      }, err => {
        this.openSnackBar(err.error.message, 'Change email');
      });
  }

  openSnackBar(message, action): any {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
