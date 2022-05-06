export interface Token {
  /**
   * @description 用於存取API服務的token，格式為JWT
   */
  access_token: string;
  /**
   * @description token的有效期限，單位為秒，預設為86400秒(1天)
   */
  expires_in: number;
  /**
   * @description token類型，固定為"Bearer"
   */
  token_type: string;
  refresh_expires_in: number;
  scope: string;
}
