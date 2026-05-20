import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./pages/score/score.component').then(m => m.ScoreComponent) }
];
