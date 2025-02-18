import { Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

// const protectedRoutes = new Map<string, any>([
//   [ 's', undefined ]
// ]);

export const routes: Routes = [
  // ...Array.from(protectedRoutes).map( ([ path, component]) => ({
  //   path,
  //   component,
  //   CantActive: []
  // })),
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
