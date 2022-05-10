import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from '../services/loader.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private loaderService: LoaderService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // 取得 json 檔案及事件列表之要求，不加入 laoding 的計算

    if (/\.json$/i.test(request.url) || /AlertEventLogs$/i.test(request.url)) {
      return next.handle(request);
    } else {
      this.loaderService.start();
      return next.handle(request).pipe(
        finalize(() => {
          this.loaderService.stop();
        })
      );
    }
  }
}
