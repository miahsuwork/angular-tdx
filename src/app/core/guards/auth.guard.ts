import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private tokenService: TokenService,
    private storageService: StorageService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const isGetToken = this.tokenService.isGetToken;
    if (isGetToken) {
      return isGetToken;
    } else {
      this.tokenService.getToken().subscribe((request) => {
        this.storageService.token.setItem(
          `${request.token_type} ${request.access_token}`
        );
        return true;
      });
    }
  }
}
