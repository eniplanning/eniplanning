import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';
import { ROLES } from '../role';
 
@Injectable({ providedIn: 'root' })
export class OnlyPedagGuard implements CanActivate {
 

    constructor(
        private router: Router
    ) { }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (sessionStorage.getItem('user_role') == '2' || sessionStorage.getItem('user_role') == '3' ) {
            // logged in so return true
            return true;
        }
 
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/unauthorized']);
        return false;
    }
}