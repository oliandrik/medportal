// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { ReactiveFormsModule } from '@angular/forms';
// import { LoginComponent } from '../login/login.component';
// describe('LoginComponent', () => {
//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [LoginComponent],
//       imports: [ReactiveFormsModule],
//     }).compileComponents();
//   });
//   beforeEach(() => {
//     fixture = TestBed.createComponent(LoginComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
//   it('should initialize the form correctly', () => {
//     expect(component.form.get('email')).not.toBeNull();
//     expect(component.form.get('password')).not.toBeNull();
//   });
//   it('should disable the submit button when the form is invalid', () => {
//     const submitButton: HTMLButtonElement = fixture.nativeElement.querySelector('button[type="submit"]');
//     expect(submitButton.disabled).toBeTruthy();
//     component.form.setValue({
//       email: 'test@example.com',
//       password: 'password',
//     });
//     fixture.detectChanges();
//     expect(submitButton.disabled).toBeFalsy();
//   });
//   it('should emit the form values on submit', () => {
//     spyOn(component.submitted, 'emit');
//     const emailInput: HTMLInputElement = fixture.nativeElement.querySelector('input[formControlName="email"]');
//     const passwordInput: HTMLInputElement = fixture.nativeElement.querySelector('input[formControlName="password"]');
//     const submitButton: HTMLButtonElement = fixture.nativeElement.querySelector('button[type="submit"]');
//     emailInput.value = 'test@example.com';
//     passwordInput.value = 'password';
//     emailInput.dispatchEvent(new Event('input'));
//     passwordInput.dispatchEvent(new Event('input'));
//     fixture.detectChanges();
//     submitButton.click();
//     fixture.detectChanges();
//     expect(component.submitted.emit).toHaveBeenCalledWith({
//       email: 'test@example.com',
//       password: 'password',
//     });
//   });
// });
