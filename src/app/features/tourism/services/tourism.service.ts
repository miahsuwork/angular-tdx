import { ApiBaseService } from 'src/app/core/services/api-base.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { TourismParameters } from 'src/app/features/tourism/models/tourism-parameter.model';
import { TourismScenicSpot } from 'src/app/features/tourism/models/tourism-scenic-spot.model';
import { TourismRestaurant } from 'src/app/features/tourism/models/tourism-restaurant.model';
import { TourismActivity } from '../models/tourism-activity.model';

@Injectable({
  providedIn: 'root',
})
export class TourismService extends ApiBaseService {
  constructor(protected http: HttpClient) {
    super(environment.tdxApiUrl, http);
  }

  /**
   * @description 取得所有觀光景點
   * @param parameters 查詢條件
   * @param city 查詢特定城市
   * @returns 觀光景點查詢結果
   */
  getScenicSpot(
    parameters: TourismParameters,
    city: string = ''
  ): Observable<TourismScenicSpot[]> {
    const httpParams = this.getHttpParams(parameters);
    return this.get(`/api/basic/v2/Tourism/ScenicSpot/${city}`, httpParams);
  }

  /**
   * @description 取得所有餐飲資料
   * @param parameters 查詢條件
   * @param city 查詢特定城市
   * @returns 餐飲查詢結果
   */
  getRestaurant(
    parameters: TourismParameters,
    city: string = ''
  ): Observable<TourismRestaurant[]> {
    const httpParams = this.getHttpParams(parameters);
    return this.get(`/api/basic/v2/Tourism/Restaurant/${city}`, httpParams);
  }

  /**
   * @description 取得所有觀光活動
   * @param parameters 查詢條件
   * @param city 查詢特定城市
   * @returns 觀光活動查詢結果
   */
  getActivity(
    parameters: TourismParameters,
    city: string = ''
  ): Observable<TourismActivity[]> {
    const httpParams = this.getHttpParams(parameters);
    return this.get(`/api/basic/v2/Tourism/Activity/${city}`, httpParams);
  }

  private getHttpParams(parameters: TourismParameters): HttpParams {
    let httpParams = new HttpParams();
    if (Object.keys(parameters).length > 0) {
      for (const [key, value] of Object.entries(parameters)) {
        httpParams = httpParams.set(`$${key}`, value);
      }
    }
    return httpParams;
  }
}
