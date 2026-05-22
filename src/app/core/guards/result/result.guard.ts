import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AppFlowService } from '../../services/app-flow/app-flow.service';

export const resultGuard: CanActivateFn = (route, state) => {
  const gameFlow = inject(AppFlowService);
  const router = inject(Router);

  if (gameFlow.hasResultAccess()) {
    return true;
  }

  return router.createUrlTree(['/']);
};
