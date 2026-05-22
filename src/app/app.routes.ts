import { Routes } from '@angular/router';
import { gameGuard } from './core/guards/game/game.guard';
import { resultGuard } from './core/guards/result/result.guard';

export const routes: Routes = [
    { path: '', loadChildren: () => import('./features/general/general.routes').then(m => m.routes), },
    { path: 'game', loadChildren: () => import('./features/game/game.routes').then(m => m.routes), canActivate: [gameGuard] },
    { path: 'new-user', loadChildren: () => import('./features/register/register.routes').then(m => m.routes) },
    { path: 'score', loadChildren: () => import('./features/score/score.routes').then(m => m.routes) },
    { path: 'result', loadChildren: () => import('./features/result/result.routes').then(m => m.routes), canActivate: [resultGuard] },
];
