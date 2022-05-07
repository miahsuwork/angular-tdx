import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import jsSHA from 'jssha';
import { RequestHttpHeader } from '../models/request-http-header.model';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.url.indexOf('Tourism') > 0) {
      request = request.clone({
        headers: request.headers.set('authorization', 'client_credentials'),
      });
    }
    return next.handle(request);
  }
}