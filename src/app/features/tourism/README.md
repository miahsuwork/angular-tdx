# 台灣走走觀光網站

[DEMO 連結](https://miahsuwork.github.io/angular-tdx/#/)

![台灣走走觀光網站](https://github.com/miahsuwork/angular-tdx/blob/master/src/assets/images/introduce/project1.png)

### API

串接 [TDX 運輸資料流通服務平臺 API](https://tdx.transportdata.tw/)

### 使用套件

- @angular/material
- @ngx-translate
- @ngx-translate/http-loader
- url-join

## 網站功能

查詢台灣觀光資訊，包含：景點、餐飲、活動

### UI 元件規劃

![UI 元件規劃](https://github.com/miahsuwork/angular-tdx/blob/master/src/assets/images/introduce/ui-component.png)

### 路由規劃

![UI 元件規劃](https://github.com/miahsuwork/angular-tdx/blob/master/src/assets/images/introduce/router.png)

### 實作細節

- [首頁]中英語系翻譯
- 建立 route guard 並搭配 Interceptors 及導轉頁確保使用者進入頁面時取得 token。
- 建立 共用 API BaseService。
- 建立 error interceptors 統一錯誤處理邏輯。
- 使用 lazy loading 的方式載入模組。
- 在 Environment 設定取得 token 資訊。
- 建立 loader interceptors 統一 loading 畫面。
- 建立 timeout interceptors 處理 API 回應過久時導到 error interceptors 處理。
- 建立 storage.service 將 token 儲存於 sessionStorage 中。

### 問題相談

- 語系轉換
  - 如何避免兩語系設定檔不同步的問題？
  - 嘗試了在設定檔中 inner HTML 但感覺實務上不會這樣使用。
  - `提問` 倘若資料是來自於後端，那在語系轉換的部分也會是由後端轉換嗎？
- material
  - material 的 loading 與 primeNG 使用的方式很不同， primeNG 是使用一個 boolean 去控制開關，material 是使用 method 控制，導致在計算 api 產生 loading 的邏輯不同。
  - `未解決` 不清楚 (grid-list)[https://material.angular.io/components/grid-list/overview] 使用方式跟邏輯，導致畫面觀光景點列表查詢結果寬度不一，另外就是重新整理後寬度會變動。
- 部署
  - 由於部署時不是在根目錄，因此圖片、語系檔引入方式需要將路徑調整，['/assets/images/logo.svg'] -> ['assets/images/logo.svg']
- 其他
  - `提問` 取得 token 的資料通常會寫在環境檔嗎？另外就是如何在送出 request 時隱藏這些機敏資料？
