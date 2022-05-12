# Response handler

- 當 response 的內容包含過多不需要資料時可以針對 response 解構
- 當 response 中有後端自定義的 header ，前端需要針對 header 內的 returnCode 進行判斷以及邏輯處理。

## 實作說明

- 對 response 解構
- response
  原本

  ```json
  {
    "id": "123",
    "metadata": "blah",
    "data": {
      "users": {
        "count": 4,
        "list": ["bob", "john", "doe"]
      }
    }
  }
  ```

  取用所需要的資料

  ```json
  {
    "list": ["bob", "john", "doe"]
  }
  ```
