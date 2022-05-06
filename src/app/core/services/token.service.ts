import { ApiBaseService } from 'src/app/core/services/api-base.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenService extends ApiBaseService {
  constructor(protected http: HttpClient) {
    super('', http);
  }

  getToken(): Observable<any> {
    const formData = new URLSearchParams();
    formData.set('client_id', 'miahsuwork-23e3ae8f-59e2-4137');
    formData.set('client_secret', '4b42578f-40fb-4268-bde2-bf04176d6ed0');
    formData.set('grant_type', 'client_credentials');

    return this.post(
      'https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token',
      formData,
      { 'Content-Type': 'application/x-www-form-urlencoded' }
    );
  }
}
