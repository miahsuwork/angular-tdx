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
    // 如果 API Url 是撈取觀光資料的時候，要放入 token

    if (request.url.includes('Tourism')) {
      request = request.clone({
        headers: request.headers.set('authorization', 'client_credentials'),
      });
    }
    return next.handle(request);
  }
}
