export interface AesRsaRequest {
  /**
   * @description RSA 加密後的 AES key
   */
  encryptKey: string;

  /**
   * @description AES 加密後的資料
   */
  encryptData: string;
}
