# AES/RSA 加解密功能實作

[DEMO 連結](https://miahsuwork.github.io/angular-tdx/#/other)

![AES/RSA 加解密功能實作](https://github.com/miahsuwork/angular-tdx/blob/master/src/assets/images/introduce/project2.png)

### 使用套件

- 前端
  - crypto-js
  - jsencrypt
- 後端
  - express
  - body-parser

## 實作流程

1. 【前端】發出請求取得 RSA PublicKey。
2. 【前端】使用 AES Key 對要傳送的資料（明文） Data 進行加密，生成密文 Encrypt Data。
3. 【前端】使用 RSA PublicKey 對 AES Key 加密，生成 Encrypt Key。
4. 【前端】將 Encrypt Key 和 Encrypt Data 傳遞至後端。
5. 【後端】拿到上述（3）步驟中的 Encrypt Key 和 Encrypt Data。
6. 【後端】用 RSA PrivityKey 對 Encrypt Key 進行解密操作，得到 AES Key。
7. 【後端】用 AesKey 解密 Encrypt Data，得到資料（明文） 將 Data 傳回前端。

### 議題討論

- AES 中有一個 IV (初始向量)的欄位，再做好前端時其實並沒有使用到，但在實作後端的部分是必須要帶入的欄位，因為對 AES 不夠理解，所以花很一些時間去查找，後來也順利找到後端 IV 欄位可以不帶的方法。
