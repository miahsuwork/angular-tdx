import { ApiBaseService } from 'src/app/core/services/api-base.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Token } from '../models/token.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class TokenService extends ApiBaseService {
  constructor(
    protected http: HttpClient,
    private storageService: StorageService
  ) {
    super(environment.tdxApiUrl, http);
  }

  get isGetToken(): boolean {
    return !!this.storageService.token.getItem();
  }

  getToken(): Observable<Token> {
    const formData = new URLSearchParams();
    const option = { 'Content-Type': 'application/x-www-form-urlencoded' };
    formData.set('client_id', environment.clientId);
    formData.set('client_secret', environment.clientSecret);
    formData.set('grant_type', 'client_credentials');

    return this.post(
      '/auth/realms/TDXConnect/protocol/openid-connect/token',
      formData,
      option
    );
  }
}
