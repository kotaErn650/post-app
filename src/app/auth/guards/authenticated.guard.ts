import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { firstValueFrom } from 'rxjs';

export const authenticatedGuard: CanMatchFn = async (route, segments) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const isAutheticated = await firstValueFrom(authService.checkStatus());

  if (!isAutheticated) {
    router.navigateByUrl('/');
    return false;
  }
  return true;
};
