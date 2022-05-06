import { ApiBaseService } from 'src/app/core/services/api-base.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AttractionService extends ApiBaseService {
  constructor(protected http: HttpClient) {
    super(environment.tdxApiUrl, http);
  }

  /**
   * @description 取得所有觀光景點資料
   */
  getAllAttraction(): Observable<any> {
    return this.get(`/ScenicSpot`);
  }
}
