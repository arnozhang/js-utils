import Logger from "./logger";

/**
 * @author arnozhang
 * @date 2019/06/25
 */

const TAG = 'JsUtils';

export default class JsUtils {

    static isEmpty(value: any): boolean {
        return value == null || value.length <= 0;
    }

    static isNotEmpty(value: any): boolean {
        return !JsUtils.isEmpty(value);
    }

    static isString(value: any): boolean {
        return typeof (value) === 'string';
    }

    static isNumber(value: any): boolean {
        return typeof (value) === 'number';
    }

    static isBoolean(value: any): boolean {
        return typeof (value) === 'boolean';
    }

    static isObject(value: any): boolean {
        return typeof (value) === 'object' && !JsUtils.isArray(value);
    }

    static isArray(value: any): boolean {
        return Array.isArray(value);
    }

    static isObjectOrArray(value: any): boolean {
        return typeof (value) === 'object';
    }

    static isFunction(value: any): boolean {
        return typeof (value) === 'function';
    }

    static parseIntSafe(content: string, defInt?: number): number {
        try {
            return parseInt(content);
        } catch (e) {
            Logger.e(TAG, `parseInt '${content}' error: ${e}`);
        }

        return defInt;
    }

    static parseFloatSafe(content: string, defFloat?: number): number {
        try {
            return parseFloat(content);
        } catch (e) {
            Logger.e(TAG, `parseFloat '${content}' error: ${e}`);
        }

        return defFloat;
    }

    static arrayContains(array: any[], value: any): boolean {
        if (!array) {
            return false;
        }

        for (let item of array) {
            if (item == value) {
                return true;
            }
        }

        return false;
    }

    static startsWith(value: string, sub: string): boolean {
        return value.indexOf(sub) == 0;
    }

    static endsWith(value: string, sub: string): boolean {
        return value.substring(value.length - sub.length, value.length) === sub;
    }

    static openInNewTab(url: string) {
        const win = window.open(url, '_blank');
        win.focus();
    }
}
