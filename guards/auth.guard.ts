import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { authTemporalSession, authTokenVariable } from '../data/constants/local-storage-variables';

@Injectable()
export class CmmAuthGuard  {

  constructor(private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    // En caso de que el usuario tenga un token y no tenga que actualizar contraceña
    if (localStorage.getItem(authTokenVariable) && !localStorage.getItem(authTemporalSession)) {

      // Indicamos que puede pasar
      return true;

    };

    // En cualquier otro caso lo redirigimos al login
    this.router.navigate(['auth']);

    // Indicamos que no puede pasar
    return false;

  }

}
