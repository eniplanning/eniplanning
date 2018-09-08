import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { ROLES } from '../role';
import { CONFIG } from '../config';
 
@Injectable({ providedIn: 'root' })
export class NoChangeAllowed implements CanActivate {
 
    constructor(
        private router: Router,
    ) { }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (JSON.parse(sessionStorage.getItem('user')).email != CONFIG.email_administrateur) {
            // logged in so return true
            return true;
        }
 
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/unauthorized']);
        return false;
    }
}