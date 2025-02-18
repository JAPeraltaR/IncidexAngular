import { Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/layout/home-layout/home-layout.component'),
    children: [
      {
        path: 'caracteristicas',
        loadComponent: () => import('./home/pages/caracteristica/caracteristica.component')
      },
      {
        path: 'incidex',
        loadComponent: () => import('./home/pages/incidex/incidex.component')
      },
      {
        path: 'prices',
        loadComponent: () => import('./home/pages/prices/prices.component')
      }
    ]
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },
  { path: '**', title: 'Error', component: ErrorPageComponent }
];
