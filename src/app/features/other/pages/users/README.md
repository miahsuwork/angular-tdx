# Response handler

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

## 議題討論

- `詢問` 想請問實際開發上的使用時機？
