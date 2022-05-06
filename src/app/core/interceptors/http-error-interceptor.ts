import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { StorageService } from '../services/storage.service';
import { TokenService } from '../services/token.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    private storageService: StorageService,
    private tokenService: TokenService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        switch (err.status) {
          case 401:
            this.storageService.token.removeItem();
            break;
          case 400:

          case 404:
            break;
          case -1:
            break;
          case 0:
            break;
          default:
        }
        return EMPTY;
      })
    );
  }
}
