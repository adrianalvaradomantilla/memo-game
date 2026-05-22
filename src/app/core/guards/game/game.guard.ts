import { CanActivateFn, Router } from '@angular/router';
import { AppFlowService } from '../../services/app-flow/app-flow.service';
import { inject } from '@angular/core';

export const gameGuard: CanActivateFn = (route, state) => {
  const gameFlow = inject(AppFlowService);
  const router = inject(Router);

  if (gameFlow.hasGameAccess()) {
    return true;
  }

  return router.createUrlTree(['/']); 
};
