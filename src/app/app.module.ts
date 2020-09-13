import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { TokenInterceptor } from './services/token.interceptor';
import { MatRadioModule } from '@angular/material/radio';
import { GroupComponent } from './group/group.component';
import { ProfileComponent } from './profile/profile.component';
import { GroupDetailsComponent } from './group-details/group-details.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CreateCardComponent } from './create-card/create-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    LandingComponent,
    GroupComponent,
    ProfileComponent,
    GroupDetailsComponent,
    CreateCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatRadioModule,
    HttpClientModule
  ],
  providers: [AuthGuard,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
