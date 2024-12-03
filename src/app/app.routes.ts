import { Routes } from '@angular/router';
import {FeatureListComponent} from './feature-list/feature-list.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'feature-list' },
  { path: 'feature-list', component: FeatureListComponent },
  {
    path: 'standalone-components',
    children: [
      {
        path: '',
        loadComponent: () => import('./standalone/standalone-example/standalone-example.component').then(m => m.StandaloneExampleComponent),
      },
      {
        path: 'details/:index',
        loadComponent: () => import('./standalone/dog-view/dog-view.component').then(m => m.DogViewComponent)
      }
    ]
  },

];
