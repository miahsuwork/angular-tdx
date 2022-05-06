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

  // getRequestHeader = (): RequestHttpHeader => {
  //   let AppID = '32b6e2bf74aa49de9f8bb80cbeff0d42';
  //   let AppKey = 'mIW5Elq-zmd-hbE--TYuXieNV7s';
  //   let GMTString = new Date().toUTCString();
  //   let ShaObj = new jsSHA('SHA-1', 'TEXT');
  //   ShaObj.setHMACKey(AppKey, 'TEXT');
  //   ShaObj.update('x-date: ' + GMTString);
  //   let HMAC = ShaObj.getHMAC('B64');
  //   let Authorization =
  //     'hmac username="' +
  //     AppID +
  //     '", algorithm="hmac-sha1", headers="x-date", signature="' +
  //     HMAC +
  //     '"';
  //   return { authorization: Authorization, xDate: GMTString };
  // };

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.url.indexOf('transportdata') > 0) {
      request = request.clone({
        headers: request.headers
          .set('grant_type', 'client_credentials')
          .set('client_id', 'miahsuwork-23e3ae8f-59e2-4137')
          .set('client_secret', '4b42578f-40fb-4268-bde2-bf04176d6ed0'),
      });
    }
    return next.handle(request);
  }
}
