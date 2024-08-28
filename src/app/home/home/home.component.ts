import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="home-content">
      <h1>Bienvenido al Sistema de Gestión de Informes</h1>
    </div>
  `,
  styles: [`
    .home-content {
      text-align: center;
      margin-top: 50px;
    }
  `]
})
export class HomeComponent {}
