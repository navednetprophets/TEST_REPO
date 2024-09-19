import { Routes } from '@angular/router';

export const homeRoutes: Routes = [
  {
    path: 'step-one',
    loadComponent: () =>
      import('./step-one/step-one.component').then(
        (comp) => comp.StepOneComponent
      ),
  },
  {
    path: 'step-two',
    loadComponent: () =>
      import('./step-two/step-two.component').then(
        (comp) => comp.StepTwoComponent
      ),
  },
];
