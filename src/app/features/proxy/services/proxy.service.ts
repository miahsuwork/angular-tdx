import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiBaseService } from 'src/app/core/services/api-base.service';

@Injectable({
  providedIn: 'root',
})
export class ProxyService extends ApiBaseService {
  constructor(protected http: HttpClient) {
    super('', http);
  }

  /**
   * @description 取得臺北市行人專用清潔箱
   */
  getTaipeiPedestrianCleaningBox(): Observable<any> {
    return this.get(
      `/api/v1/dataset/8fe44930-f8e1-48d9-ba1b-b35ba64c89eb?scope=resourceAquire`
    );
  }
}
