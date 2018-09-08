import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
 
@Injectable({ providedIn: 'root' })
export class OnlyAdminGuard implements CanActivate {
 
    constructor(
        private router: Router,
    ) { }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (JSON.parse(sessionStorage.getItem('user')).role_id == '3') {
            // logged in so return true
            return true;
        }
 
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/unauthorized']);
        return false;
    }
}