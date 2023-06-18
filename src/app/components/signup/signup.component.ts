import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  constructor(private router: Router, private formBuilder: FormBuilder) {}
  form: FormGroup;
  submitted: any;

  ngOnInit() {
    this.form = this.formBuilder.group({
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      patronymic: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required, Validators.minLength(8)],
      repeatPassword: ['', Validators.required, Validators.minLength(8)],
    });
  }

  onSubmit() {
    // if (this.form.invalid) {
    //   return;
    // }
    this.router.navigate(['dashboard/main']);
  }
}
