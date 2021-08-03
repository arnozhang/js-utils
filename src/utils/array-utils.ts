import { JsUtils } from './js-utils';

/**
 * @author arnozhang
 * @date 2019/06/25
 */

const TAG = 'ArrayUtils';

export class ArrayUtils {
  static newArray<T>(length: number, value?: T): T[] {
    return new Array(length).fill(value);
  }

  static arrayContains(array: any[], value: any): boolean {
    if (JsUtils.isEmpty(array)) {
      return false;
    }

    for (let item of array) {
      if (item == value) {
        return true;
      }
    }

    return false;
  }

  static removeArrayByIndex(array: any[], from: number, to?: number): number {
    const rest = array.slice((to || from) + 1 || array.length);
    array.length = from < 0 ? array.length + from : from;
    return array.push(...rest);
  }
}
