import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import UrlJoin from 'url-join';

@Injectable({
  providedIn: 'root',
})
export class ApiBaseService {
  constructor(protected baseUrl: string, protected http: HttpClient) {}

  /**
   * Post method
   * @param path Api url
   * @param postData Request data
   * @param headerOptions Http header 附加參數
   * @param responseType Response 的資料格式
   * @param observe Response 的內容
   * @returns Observables
   */
  post<T>(
    path: string,
    postData: object | Array<any> = {},
    headerOptions: { [key: string]: string } = {},
    responseType?: 'json' | 'text' | 'blob' | 'arraybuffer'
  ): Observable<T> {
    const apiUrl = UrlJoin(this.baseUrl, path);
    const options = {
      headers: this.getHttpHeader(headerOptions),
    };
    if (responseType) {
      Object.assign(options, { responseType });
    }

    return this.http.post<T>(apiUrl, postData, options);
  }

  /**
   * Get method
   * @param path Api url
   * @param headerParams url 附加參數
   * @param headerOptions Http header 附加參數
   * @param responseType Response 的資料格式
   * @param observe Response 的內容
   * @returns Observables
   */
  get<T>(
    path: string,
    headerParams?: HttpParams,
    headerOptions: { [key: string]: string } = {},
    responseType?: 'json' | 'text' | 'blob' | 'arraybuffer'
  ): Observable<T> {
    const apiUrl = UrlJoin(this.baseUrl, path);
    const options = {
      headers: this.getHttpHeader(headerOptions),
    };
    if (headerParams) {
      Object.assign(options, { params: headerParams });
    }
    if (responseType) {
      Object.assign(options, { responseType });
    }

    return this.http.get<T>(apiUrl, options);
  }

  /**
   * Put method
   * @param path Api url
   * @param putData Request data
   * @param headerOptions Http header 附加參數
   * @param responseType Response 的資料格式
   * @returns Observables
   */
  put<T>(
    path: string,
    putData: object | Array<any> = {},
    headerOptions: { [key: string]: string } = {},
    responseType?: 'json' | 'text' | 'blob' | 'arraybuffer'
  ): Observable<T> {
    const apiUrl = UrlJoin(this.baseUrl, path);
    const options = {
      headers: this.getHttpHeader(headerOptions),
    };
    if (responseType) {
      Object.assign(options, { responseType });
    }

    return this.http.put<T>(apiUrl, putData, options);
  }

  /**
   * Delete method
   * @param path Api url
   * @param headerParams url 附加參數
   * @param headerOptions Http header 附加參數
   * @param responseType Response 的資料格式
   * @param observe Response 的內容
   * @returns Observables
   */
  delete<T>(
    path: string,
    headerParams?: HttpParams,
    headerOptions: { [key: string]: string } = {},
    responseType?: 'json' | 'text' | 'blob' | 'arraybuffer'
  ): Observable<T> {
    const apiUrl = UrlJoin(this.baseUrl, path);
    const options = {
      headers: this.getHttpHeader(headerOptions),
    };
    if (headerParams) {
      Object.assign(options, { headerParams });
    }
    if (responseType) {
      Object.assign(options, { responseType });
    }

    return this.http.delete<T>(apiUrl, options);
  }

  /**
   * 建構 Http header
   * @param options Http header 附加參數
   * @returns HttpHeaders
   */
  private getHttpHeader(options: { [key: string]: string }): HttpHeaders {
    let headers = new HttpHeaders();
    if (Object.keys(options).length > 0) {
      for (const [key, value] of Object.entries(options)) {
        headers = headers.set(key, value);
      }
    }
    return headers;
  }
}
