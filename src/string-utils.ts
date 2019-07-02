import JsUtils from "./js-utils";

/**
 * @author arnozhang
 * @date 2019/06/25
 */

const TAG = 'StringUtils';

export default class StringUtils {

    private static readonly URL_REG = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g;

    static startsWith(value: string, sub: string): boolean {
        return value.indexOf(sub) == 0;
    }

    static endsWith(value: string, sub: string): boolean {
        return value.substring(value.length - sub.length, value.length) === sub;
    }

    static tryTrim(value: string): string {
        if (JsUtils.isNotEmpty(value)) {
            return value.trim();
        }

        return value;
    }

    static isUrl(path: string): boolean {
        return StringUtils.URL_REG.test(path);
    }
}
