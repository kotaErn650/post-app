import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { firstValueFrom } from 'rxjs';

export const notAuthenticatedGuard: CanMatchFn = async (route, segments) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const isAutheticated = await firstValueFrom(authService.checkStatus());

  if (isAutheticated) {
    router.navigateByUrl('/dashboard');
    return false;
  }




  return true;
};
