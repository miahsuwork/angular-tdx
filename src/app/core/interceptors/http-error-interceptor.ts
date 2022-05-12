import { Router } from '@angular/router';
import { ToastService } from './../services/toast.service';
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

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    private storageService: StorageService,
    private toastService: ToastService,
    private router: Router
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        switch (err.status) {
          case 401:
            // 表示 token 過期，移除舊 token 並重新導回首頁
            this.storageService.token.removeItem();
            this.router
              .navigateByUrl('/redirect', { skipLocationChange: true })
              .then(() => {
                this.router.navigate(['/']);
              });
            break;
          case 400:
            this.toastService.error(
              `${err.status.toString() + ' '}發生錯誤，請稍後再試`
            );
          case 404:
            this.toastService.error(
              `${err.status.toString() + ' '}發生錯誤，請稍後再試`
            );
            break;
          case 500:
            this.toastService.error(
              `${
                err.status.toString() + ' '
              }發生錯誤，請稍後再試或聯繫系統管理者`
            );
            break;
          case -1:
            this.toastService.error(`連線逾時，請稍後再試`);
            break;
          case 0:
            this.toastService.error(
              `連線異常，請確認您的網路是否連線正常運作或聯繫系統管理者`
            );
            break;
          default:
            this.toastService.error(
              `${
                err.status === undefined ? '' : err.status.toString() + ' '
              }發生錯誤，請稍後再試`
            );
        }
        return EMPTY;
      })
    );
  }
}
