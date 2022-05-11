export interface TourismParameters {
  /**
   * @description 挑選顯示欄位
   * 範例：'ActivityID,ActivityName,Address,Picture,Class1,Class2'
   */
  select?: string;
  /**
   * @description 過濾資料
   */
  filter?: string;
  /**
   * @description 排序(desc, asc)，語法為 {Field1} asc,{Field1} asc,
   * 範例：'StartTime asc'
   */
  orderby?: string;
  /**
   * @description 取前幾筆
   */
  top?: number;
  /**
   * @description 跳過前幾筆
   */
  skip?: number;
  /**
   * @description 空間過濾，語法為 nearby({Lat},{Lon},{DistanceInMeters})，
   * 範例:nearby(25.047675, 121.517055, 100)
   */
  spatialFilter?: string;
}
