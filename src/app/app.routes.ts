import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'principal',
    // para cargar mi pagina de manera asyncrona simpre usar este!
    loadComponent: () => import('./principal/principal.page').then(m => m.PrincipalPage)
  }
];
