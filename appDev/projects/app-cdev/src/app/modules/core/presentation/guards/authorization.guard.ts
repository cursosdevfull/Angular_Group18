import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
} from '@angular/router';

import { AuthService } from '../../../auth/infrastructure/services/auth.service';

export const authorizationGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthService);
  const { rolesAllowed } = route.data;
  const payload = authService.getPayload();

  if (!payload) {
    return false;
  }

  const { roles } = payload as { roles: { roleId: string; name: string }[] };
  return roles.some((role) => rolesAllowed.includes(role.name));
};
