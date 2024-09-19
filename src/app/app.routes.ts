import { Routes } from '@angular/router';
import { SidenavComponent } from './Common/sidenav/sidenav.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((comp) => comp.HomeComponent),
    loadChildren: () =>
      import('./home/home.routes').then((rotes) => rotes.homeRoutes),
  },
  {
    path: 'pages',
    loadComponent: () =>
      import('./pages/pages.component').then((comp) => comp.PagesComponent),
    loadChildren: () =>
      import('./pages/pages.routes').then((routes) => routes.pagesRoutes),
  },
  {
    path: 'golu',
    component: SidenavComponent
  }
];
