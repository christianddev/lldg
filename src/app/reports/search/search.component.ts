import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatTableModule, MatInputModule, MatButtonModule, MatCardModule],
  template: `
    <mat-card>
      <mat-form-field>
        <mat-label>Buscar informe de inspección</mat-label>
        <input matInput placeholder="Filtrar informes">
      </mat-form-field>

      <button mat-raised-button color="primary">Botón Nuevo</button>
      <button mat-raised-button color="accent">Eliminar actual</button>

      <mat-table>
        <!-- Definir columnas -->
      </mat-table>
    </mat-card>
  `,
  styles: [`
    mat-card {
      margin: 20px;
    }
  `]
})
export class SearchComponent {}
