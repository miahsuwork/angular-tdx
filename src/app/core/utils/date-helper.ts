/**
 * @description 取得當前日期算起後 N 月
 * @param n 後 N 個月
 * @returns 當前算起後 N 月
 */
export function getNextMonth(n: number): Date {
  const now = new Date();
  return new Date(now.setMonth(now.getMonth() + n));
}

/**
 * @description 取得當前日期算起後 N 天
 * @param n 前 N 個天
 * @returns 當前算起前 N 天
 */
export function getPrevDay(n: number): Date {
  const now = new Date();
  return new Date(now.setDate(now.getDate() - (n - 1)));
}

/**
 * @description 指定日期算起後 N 天
 * @param n 後 N 個天
 * @param currentDate 指定的日期
 * @returns 當前算起後 N 天
 */
export function getNextDay(currentDate: Date, n: number): Date {
  const date = new Date(currentDate);
  return new Date(date.setDate(date.getDate() + n));
}

/**
 * @description 取得當日第一秒
 * @returns 取得當日第一秒
 */
export const getTodayStart = () => {
  return new Date(new Date(new Date().toLocaleDateString()).getTime());
};

/**
 * @description 取得當日結束前一秒
 * @returns 取得當日結束前一秒
 */
export const getTodayEnd = () => {
  return new Date(new Date().setHours(23, 59, 59, 999));
};

/**
 * @description 取得當月第一天
 * @returns 取得當月第一天
 */
export const getMonthStart = () => {
  const date = new Date();
  return new Date(date.getFullYear(), date.getMonth(), 1);
};

/**
 * @description 取得當月最後一天
 * @returns 取得當月最後一天
 */
export const getMonthEnd = () => {
  const date = new Date();
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
};

/**
 * @description 時間選擇器年範圍：前一年到後十年
 * @returns 前一年:後十年
 */
export const getYearRange = () => {
  return `${new Date().getFullYear() - 1}:${new Date().getFullYear() + 10}`;
};
