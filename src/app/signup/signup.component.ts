import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpService } from '../services/sign-up.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;

  constructor( private signUpService :SignUpService ,private formBuilder: FormBuilder, private router: Router) { }

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
        email: this.f.email.value,
        password: this.f.password.value
      }
    )
    .subscribe(success => {
      if (success) {
        this.router.navigate(['/login']);
      }
    });
  }
}
