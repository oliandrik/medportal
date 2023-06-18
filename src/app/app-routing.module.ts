import { ChartsComponent } from './components/charts/charts.component';
import { ContactComponent } from './components/contact/contact.component';
import { DoctorLayoutComponent } from './components/doctor-layout/doctor-layout.component';
import { Err404Component } from './components/err404/err404.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { PassTestComponent } from './components/pass-test/pass-test.component';
import { PatientsComponent } from './components/patients/patients.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { TestListComponent } from './components/test-list/test-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'reset-password', component: ResetPasswordComponent },
      { path: 'doctors/signup', component: RegisterComponent },
      { path: 'doctors/login', component: SigninComponent },
    ],
  },
  {
    path: 'dashboard',
    component: MainLayoutComponent,
    children: [
      { path: 'main', component: HomeComponent },
      { path: 'test-list', component: TestListComponent },
      { path: 'pass-test', component: PassTestComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'charts', component: ChartsComponent },
    ],
  },
  {
    path: 'doctors',
    component: DoctorLayoutComponent,
    children: [
      { path: 'main', component: HomeComponent },
      { path: 'test-list', component: TestListComponent },
      { path: 'pass-test', component: PassTestComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'patients', component: PatientsComponent },
      { path: 'charts', component: ChartsComponent },
    ],
  },
  {
    path: '**',
    component: Err404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
