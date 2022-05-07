import { CITY } from 'src/constants/city';

/**
 * @description 取得縣市
 * @param address 地址
 * @returns 縣市名稱
 */
export function getCity(address: string): string {
  let city = '';
  for (const [key, value] of Object.entries(CITY)) {
    if (address.includes(value.label)) {
      city = value.label;
    }
  }
  return city;
}
