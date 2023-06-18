import { AvatarComponent } from './components/avatar/avatar.component';
import { BarchartComponent } from './components/bar-chart/bar-chart.component';
import { ChartsComponent } from './components/charts/charts.component';
import { ContactComponent } from './components/contact/contact.component';
import { EditCreateTestListModalComponent } from './components/edit-create-test-list-modal/edit-create-test-list-modal.component';
import { Err404Component } from './components/err404/err404.component';
import { FieldComponent } from './components/field/field.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponentOld } from './components/header-old/header.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { LoginComponent } from './components/login/login.component';
import { LogoComponent } from './components/logo/logo.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { NotificationComponent } from './components/notification/notification.component';
import { PassTestComponent } from './components/pass-test/pass-test.component';
import { PatientsComponent } from './components/patients/patients.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { TestListComponent } from './components/test-list/test-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorLayoutComponent } from './components/doctor-layout/doctor-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponentOld,
    HeaderComponent,
    FooterComponent,
    TestListComponent,
    PassTestComponent,
    EditCreateTestListModalComponent,
    HomeComponent,
    Err404Component,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    RegisterComponent,
    ResetPasswordComponent,
    SidebarComponent,
    AvatarComponent,
    NotificationComponent,
    LogoComponent,
    ProfileComponent,
    FieldComponent,
    LineChartComponent,
    BarchartComponent,
    ChartsComponent,
    SigninComponent,
    DoctorLayoutComponent,
    PatientsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    NoopAnimationsModule,
    MatCheckboxModule,
    MatTabsModule,
    MatButtonToggleModule,
    FormsModule,
    NgxChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
