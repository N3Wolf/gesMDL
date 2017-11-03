import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { UserService } from "../_services/user.service";
import { AuthenticationService } from "../_services/authentication.service";
import { Observable } from "rxjs/Rx";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private _router: Router,
    private _userService: UserService,
    private authenticationService: AuthenticationService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (this.authenticationService.loggedIn()) {
        return true;
      } else {
        this._router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
      }




    // this._userService.verify().map(
    //   data => {
    //     if (data !== null) {
          // logged in so return true
      //     //return;
      //   // }
      //   // error when verify so redirect to login page with the return url
      //
      // },
      // error => {
      //   // error when verify so redirect to login page with the return url
      //   this._router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      //   return false;
      // });
  }
}
