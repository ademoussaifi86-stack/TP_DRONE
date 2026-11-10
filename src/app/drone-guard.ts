
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from './services/auth';
import { inject } from '@angular/core';

export const droneGuard: CanActivateFn = (route, state) => {

  const auth = inject(Auth);
  const router = inject(Router);

  if (auth.isAdmin()) {
    return true;
  } else {
    router.navigate(['/app-forbidden']);
    return false;
  }

};
