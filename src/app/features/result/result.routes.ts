import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./pages/result/result.component').then(m => m.ResultComponent) }
];
