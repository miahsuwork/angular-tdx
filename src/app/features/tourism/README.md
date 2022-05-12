# 台灣走走觀光網站

![台灣走走觀光網站](https://github.com/miahsuwork/angular-tdx/blob/master/src/assets/images/introduce/project1.png)

### API

串接 [TDX 運輸資料流通服務平臺 API](https://tdx.transportdata.tw/)

### 使用套件

- @angular/material
- @ngx-translate
- @ngx-translate/http-loader
- url-join

## 網站功能

查詢台灣觀光資訊，包含：景點、餐飲

### UI 元件規劃

![UI 元件規劃](https://github.com/miahsuwork/angular-tdx/blob/master/src/assets/images/introduce/ui-component.png)

### 路由規劃

![UI 元件規劃](https://github.com/miahsuwork/angular-tdx/blob/master/src/assets/images/introduce/router.png)

### 實作細節

- [首頁]中英語系翻譯
- 建立 route guard 並搭配 Interceptors 確保使用者進入頁面時取得 token
- 建立 共用 API BaseService
- 建立 error interceptors 統一錯誤處理邏輯
- 使用 lazy loading 的方式載入模組
- 在 Enivironment 設定取得 token 資訊
