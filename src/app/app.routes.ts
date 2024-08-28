import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./home/home/home.component').then(m => m.HomeComponent) },
  { path: 'login', loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent) },
  { path: 'search', loadComponent: () => import('./reports/search/search.component').then(m => m.SearchComponent) },
  { path: ':id/edit', loadComponent: () => import('./reports/edit-report/edit-report.component').then(m => m.EditReportComponent) },
  { path: '**', redirectTo: '/home' }
];
