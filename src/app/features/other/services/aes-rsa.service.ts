import { Observable } from 'rxjs';
import { ApiBaseService } from 'src/app/core/services/api-base.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AesRsaRequest } from '../models/aes-rsa-request.model';
import { AesRsaResponse } from '../models/aes-rsa-response.model';

@Injectable({
  providedIn: 'root',
})
export class AesRsaService extends ApiBaseService {
  constructor(protected http: HttpClient) {
    super(environment.aesRsaUrl, http);
  }

  /**
   * @description 取得後端公鑰
   * @returns 公鑰
   */
  getPublicKey(): Observable<{ publicKey: string }> {
    return this.get(`/api/getPublicKey`);
  }

  /**
   * @description 將資料傳送到後端進行 AESxRSA 解密
   * @param request
   * @returns 解密後的資料
   */
  privateDecrypt(request: AesRsaRequest): Observable<AesRsaResponse> {
    return this.post(`/api/privateDecrypt`, request);
  }
}
