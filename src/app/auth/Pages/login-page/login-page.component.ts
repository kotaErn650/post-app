import { Component, inject, ResourceStatus, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login-page',
  // standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  authService = inject(AuthService);
  fb = inject(FormBuilder);
  hasError = signal(false);
  type = 'password';
  icon = 'bi bi-eye';

  showPassword() {
    this.type = this.type === 'password' ? 'text' : 'password';
    this.icon = this.type === 'password' ? 'bi bi-eye' : 'bi bi-eye-slash';
  }

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  onSubmit() {
    if (this.loginForm.invalid) {
      this.hasError.set(true);
      setTimeout(() => {
        this.hasError.set(false);
      }, 2000);
      return;
    }
    const { email = '', password = '' } = this.loginForm.value;
    console.log({email,password})
  }
}
