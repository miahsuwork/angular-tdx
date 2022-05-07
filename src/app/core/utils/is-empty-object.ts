/**
 * @description 判斷目標是否為空物件, null 與 undefined 也視為空物件
 * @param target 判斷目標
 * @returns 是否為空物件
 */

export const isEmptyObject = (target: object): boolean => {
  if (target) {
    return Object.keys(target).length === 0;
  } else {
    return true;
  }
};
