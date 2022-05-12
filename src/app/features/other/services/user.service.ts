import { ApiBaseService } from 'src/app/core/services/api-base.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService extends ApiBaseService {
  constructor(protected http: HttpClient) {
    super(environment.aesRsaUrl, http);
  }

  /**
   * @description user 清單
   */
  getUser(): Observable<string[]> {
    return this.get(`/users`);
  }
}
