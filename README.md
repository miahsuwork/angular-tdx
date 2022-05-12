# FIAD Senior Angular Lab

分為四部分：

- ### [台灣走走觀光網站](https://github.com/miahsuwork/angular-tdx/tree/master/src/app/features/tourism)
  串接第三方 API、配合 [UI 稿(figma)](https://www.figma.com/file/5HQAZ2bunGNKma2fwU0aNZ/The-F2E-3rd---Week1-%E5%8F%B0%E7%81%A3%E6%97%85%E9%81%8A%E6%99%AF%E9%BB%9E%E5%B0%8E%E8%A6%BD?node-id=5%3A1211) 以及搭配 [Material](https://material.angular.io/) 套件進行實作。
- ### [AES/RSA 加解密功能實作](https://github.com/miahsuwork/angular-tdx/tree/master/src/app/features/other/pages/aes-rsa)
  使用 node js 作為服務端，模擬前後端 AES/RSA 流程
- ### [Proxy](https://github.com/miahsuwork/angular-tdx/tree/master/src/app/features/other/pages/proxy)
  建立 proxy.config.json 轉發呼叫 api
- ### [Response handler](https://github.com/miahsuwork/angular-tdx/tree/master/src/app/features/other/pages/users)
  建立 response handler，針對 response 解構

## 檔案目錄

```
├── angular.json
├── backend
│   ├── controllers
│   │   └── rsaController.js
│   ├── db.js
│   ├── index.js
│   └── models
│       └── rsa.js
├── karma.conf.js
├── package-lock.json
├── package.json
├── src
│   ├── app
│   │   ├── app-routing.module.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── core
│   │   │   ├── core.module.ts
│   │   │   ├── enums
│   │   │   │   ├── city.enum.ts
│   │   │   │   ├── language.enum.ts
│   │   │   │   ├── tourism-type-field-name.enum.ts
│   │   │   │   └── tourism-type.enum.ts
│   │   │   ├── guards
│   │   │   │   └── auth.guard.ts
│   │   │   ├── interceptors
│   │   │   │   ├── api.interceptor.ts
│   │   │   │   ├── http-error-interceptor.ts
│   │   │   │   ├── loader.interceptor.ts
│   │   │   │   ├── response.interceptor.ts
│   │   │   │   ├── timeout.interceptor.ts
│   │   │   │   └── token.interceptor.ts
│   │   │   ├── models
│   │   │   │   ├── menu-item.model.ts
│   │   │   │   ├── option.model.ts
│   │   │   │   ├── request-http-header.model.ts
│   │   │   │   ├── storage-operation.model.ts
│   │   │   │   ├── storage-property-operation.model.ts
│   │   │   │   ├── token.model.ts
│   │   │   │   └── users.model.ts
│   │   │   ├── services
│   │   │   │   ├── api-base.service.ts
│   │   │   │   ├── form.service.ts
│   │   │   │   ├── language.service.ts
│   │   │   │   ├── loader.service.ts
│   │   │   │   ├── menu.service.ts
│   │   │   │   ├── storage.service.ts
│   │   │   │   ├── toast.service.ts
│   │   │   │   └── token.service.ts
│   │   │   └── utils
│   │   │       ├── city-helper.ts
│   │   │       ├── date-helper.ts
│   │   │       ├── encryption-decryption-helper.ts
│   │   │       └── is-empty-object.ts
│   │   ├── features
│   │   │   ├── other
│   │   │   │   ├── models
│   │   │   │   ├── other-routing.module.ts
│   │   │   │   ├── other.module.ts
│   │   │   │   ├── pages
│   │   │   │   └── services
│   │   │   └── tourism
│   │   │       ├── models
│   │   │       ├── pages
│   │   │       ├── services
│   │   │       ├── tourism-routing.module.ts
│   │   │       └── tourism.module.ts
│   │   ├── preset
│   │   │   ├── components
│   │   │   │   ├── footer
│   │   │   │   ├── header
│   │   │   │   ├── layout
│   │   │   │   └── page-not-found
│   │   │   └── preset.module.ts
│   │   └── shared
│   │       ├── pipes
│   │       │   └── safe.pipe.ts
│   │       └── shared.module.ts
│   ├── assets
│   │   ├── i18n
│   │   │   ├── en.json
│   │   │   └── zh-tw.json
│   │   └── images
│   ├── constants
│   │   ├── city.ts
│   │   └── index.ts
│   ├── environments
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── proxy.conf.json
│   ├── styles
│   ├── styles.scss
│   └── test.ts
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json
```

## 練習項目

### BaseService

請設計一個 HttpClient baseService，建立共用的 RESTful api 呼叫方法。

### Interceptors

1. 建立 header handler，在每次發出請求時(HttpRequest header)加上要驗證的 token。
   - src/app/core/interceptors/api.interceptor.ts
2. 建立 response handler，針對 response 解構或邏輯處理
   - src/app/core/interceptors/response.interceptor.ts
3. 建立 error handler，當呼叫 api 發生錯誤時，統一錯誤處理邏輯
   - src/app/core/interceptors/http-error-interceptor.ts

### Route Guard

建立 route guard 實作權限控管

#### 相關檔案

- src/app/app-routing.module.ts
- src/app/core/guards/auth.guard.ts

### Lazy loading feature modules

建立 feature modules，並使用 lazy loading 的方式載入模組

#### 相關檔案

src/app/app-routing.module.ts

### i18n

使用套件 ngx-translate，建立多國語系，並能語言切換

#### 相關檔案

- src/assets/i18n/en.json
- src/assets/i18n/zh-tw.json
- src/app/core/services/language.service.ts
- src/app/app.module.ts
- src/app/app.component.ts
- src/app/features/home/pages/home

#### 實作功能

- 一般轉換
- 帶入參數
- inner HTML

### AES/RSA 加解密

建立專案 AES/RSA 加解密規則

#### 相關檔案

- backend
- src/app/features/other/pages/aes-rsa

### Environment

新增環境建置設定檔

#### 相關檔案

src/environments

### Proxy

#### 相關檔案

- proxy.conf.json
- angular.json
- src/app/features/other/pages/proxy
