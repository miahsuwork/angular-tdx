const crypto = require("crypto");
const { generateKeyPairSync, privateDecrypt } = require("crypto");

const generatedPrivateKey =
  "-----BEGIN PRIVATE KEY-----\nMIICdQIBADANBgkqhkiG9w0BAQEFAASCAl8wggJbAgEAAoGBAL56gq+8oi4fTTTJ\n+LKVTqgv/xygFERiUvYbMYjgxbHx9suh8WbhLfEkIdPdBZwntiAC1zjZxEs2UwMz\nFF7AB9HAwYCwerQncoUyIHfDXnC0dj1MBNwI1JPlS6hW3/1GUluPC19J0gzCi2eS\nTetz2E5A2029oN4ZqdzCefeUnENNAgMBAAECgYA2f5jqrR798UjGxM7aUavapTjp\nuMdztWolLiyjDCSkQCWrp58JH35kk0D2fDOBtT7/s7BefLgUCOwBa1j1rx3NIFLX\nNT1KXL0x775Qpm2b53eOoin9eUPzNVkyEFKoM370uWQEKpPNxhi6+SLjd24PtbxA\nUBRZUYTz4A0vldY3pQJBAOWobTJJaXrv0gE8FHsr37T+dvqXAoloYv0UAUicRRv/\ndbet+PEgvyKFxXyxh/XrfoSKU4B9QpqSXl9jKL2+3aMCQQDUU6N443awgM6CvG9X\nPTl70roaUZR691F6Z2ras9PSy3mAzBZnADzf7EeATtHo6c5VCO6aL6u+rpFrMqoL\nlIpPAkBiJaDFJOqXR3aQYITAPvfT+gwO/ApxftMPJUWHKoG+fWZpoUgKhNwqfNDx\ngU2Bo6rmKdeVyfJ07Ki4S0BWFwPRAkAwNHj1tja5JdU8y0k/9i951ELaPNFIBaRi\n9N3Gn3Mk9Xs1aaBgbCZl9D/beomfpo1osulw6gfE998eBlei32tzAkAejgbTIXJ0\netQsg/S3hZzt9dyNl5jGNxguHwYr08jiFAxne+uXDnTTYiR4jhzKba18oyU4hgxm\nkhvr9Jt+kC/l\n-----END PRIVATE KEY-----\n";

/**
 * aes解密
 * @param data 待解密內容
 * @param key 必須為32位私鑰
 * @returns {string}
 */
function decryption(data, key, iv) {
  if (!data) {
    return "";
  }
  iv = iv || "";
  const clearEncoding = "utf8";
  const cipherEncoding = "base64";
  let cipherChunks = [];
  let decipher = crypto.createDecipheriv("aes-128-ecb", key, iv);
  decipher.setAutoPadding(true);
  cipherChunks.push(decipher.update(data, cipherEncoding, clearEncoding));
  cipherChunks.push(decipher.final(clearEncoding));
  return cipherChunks.join("");
}

const rsaModel = {
  getKeys: (cb) => {
    const { publicKey, privateKey } = generateKeyPairSync("rsa", {
      modulusLength: 1024,
      publicKeyEncoding: {
        type: "spki",
        format: "pem",
      },
      privateKeyEncoding: {
        type: "pkcs8",
        format: "pem",
      },
    });
    cb(null, { publicKey, privateKey });
  },

  getPublicKey: (cb) => {
    const publicKey =
      "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+eoKvvKIuH000yfiylU6oL/8c\noBREYlL2GzGI4MWx8fbLofFm4S3xJCHT3QWcJ7YgAtc42cRLNlMDMxRewAfRwMGA\nsHq0J3KFMiB3w15wtHY9TATcCNST5UuoVt/9RlJbjwtfSdIMwotnkk3rc9hOQNtN\nvaDeGancwnn3lJxDTQIDAQAB\n-----END PUBLIC KEY-----\n";
    cb(null, publicKey);
  },

  privateDecrypt: ({ encryptKey, encryptData }, cb) => {
    console.log(`密文: ${encryptData}`);

    const aesKey = privateDecrypt(
      {
        key: generatedPrivateKey,
        padding: crypto.constants.RSA_PKCS1_PADDING,
      },
      Buffer.from(encryptKey, "base64")
    ).toString();

    const data = decryption(encryptData, aesKey);
    console.log(`明文: ${data}`);

    cb(null, data);
  },
};

module.exports = rsaModel;
