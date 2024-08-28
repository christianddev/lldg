import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, RouterModule],
  template: `
    <mat-toolbar color="primary">
      <span>REHABILITACIÓN</span>
      <span class="spacer"></span>
      <button mat-button routerLink="/home">Home</button>
      <button mat-button routerLink="/search">Buscar Informes</button>
      <button mat-button routerLink="/login">Login</button>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .spacer {
      flex: 1 1 auto;
    }
  `]
})
export class LayoutComponent {}
