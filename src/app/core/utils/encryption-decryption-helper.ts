import * as crypto from 'crypto-js';
import JSEncrypt from 'jsencrypt';

/**
 * RSA 加密資料
 * @param data 明文資料
 * @param key RSA 公鑰
 * @returns RSA 密文資料
 */
export const encryptByRSA = (data, publicKey): string => {
  const jsEncrypt = new JSEncrypt();
  jsEncrypt.setPublicKey(publicKey);
  const encrypted = jsEncrypt.encrypt(data) as string;
  return encrypted;
};

/**
 * AES 加密資料
 * @param data 明文資料
 * @param key AES Key
 * @returns AES 密文資料
 */
export const encryptByAES = (data, key): string => {
  const ckey = crypto.enc.Utf8.parse(key);
  const encrypted = crypto.AES.encrypt(data, ckey, {
    mode: crypto.mode.ECB,
    padding: crypto.pad.Pkcs7,
  });
  return encrypted.toString();
};
