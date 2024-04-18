import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'movies',
    loadComponent: () => import('./pages/movies/movies.component'),
  },
  {
    path: 'movies/:id',
    loadComponent: () =>
      import('./pages/movie-details/movie-details.component'),
  },
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
];
