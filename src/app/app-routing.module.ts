import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { AuthGuard } from './services/auth-guard.service';
import { GroupComponent } from './group/group.component';
import { ProfileComponent } from './profile/profile.component';
import { MyCardsComponent } from './my-cards/my-cards.component';
import { GroupInfoComponent } from './group-info/group-info.component';
import { ApprovalComponent } from './approval/approval.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'landing',
    component: LandingComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'group',
    component: GroupComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'mycards',
    component: MyCardsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'approval',
    component: ApprovalComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'groupinfo/:id',
    component: GroupInfoComponent,
    canActivate: [AuthGuard]
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
