import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-edit-report',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatButtonModule, MatCardModule],
  template: `
    <mat-card>
      <h2>Editar Informe</h2>
      <form [formGroup]="editForm" (ngSubmit)="onSubmit()">
        <mat-form-field>
          <mat-label>Resumen 1</mat-label>
          <input matInput formControlName="summary1">
        </mat-form-field>

        <!-- Otros campos similares -->

        <button mat-raised-button color="primary">Guardar</button>
      </form>
    </mat-card>
  `,
  styles: [`
    mat-card {
      margin: 20px;
    }
  `]
})
export class EditReportComponent {
  editForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.editForm = this.fb.group({
      summary1: ['']
      // Otros campos similares
    });
  }

  onSubmit() {
    // Lógica para actualizar el informe
  }
}
