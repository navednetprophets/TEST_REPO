import { Routes } from '@angular/router';

export const pagesRoutes: Routes = [
  {
    path: 'timer',
    loadComponent: () =>
      import('./timer/timer.component').then((comp) => comp.TimerComponent),
  },
];
