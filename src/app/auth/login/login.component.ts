import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatButtonModule, MatCardModule],
  template: `
    <mat-card>
      <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
        <mat-form-field>
          <mat-label>Usuario</mat-label>
          <input matInput formControlName="username">
        </mat-form-field>
        <mat-form-field>
          <mat-label>Contraseña</mat-label>
          <input matInput type="password" formControlName="password">
        </mat-form-field>
        <button mat-raised-button color="primary">Login</button>
      </form>
    </mat-card>
  `,
  styles: [`
    mat-card {
      margin: 20px;
    }
  `]
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  onSubmit() {
    // Lógica de autenticación
  }
}
