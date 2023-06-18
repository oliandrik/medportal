import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private router: Router) {}

  register() {
    // if (!this.loginForm.valid) {
    //   return;
    // }
    this.router.navigate(['doctors/main']);
  }
}
