import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private storageService: StorageService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this.storageService.token.getItem();
    if (token && request.url.indexOf('Tourism') > 0) {
      request = request.clone({
        headers: request.headers.set('authorization', token),
      });
    }
    return next.handle(request);
  }
}
