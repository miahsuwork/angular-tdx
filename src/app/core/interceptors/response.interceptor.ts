import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Users } from '../models/users.model';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (
      /\.json$/i.test(request.url) ||
      /api/i.test(request.url) ||
      /transportdat/i.test(request.url)
    ) {
      return next.handle(request);
    } else {
      return next.handle(request).pipe(
        filter(
          (event) =>
            event instanceof HttpResponse && request.url.includes('users')
        ),
        map((event: HttpResponse<Users>) => {
          return event.clone({ body: event.body.data.users.list });
        })
      );
    }
  }
}
