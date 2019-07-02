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

    static parseIntSafe(content: any, defInt?: number): number {
        if (content == null) {
            return defInt;
        } if (JsUtils.isNumber(content)) {
            return parseInt(`${content}`);
        } else if (!JsUtils.isString(content)) {
            Logger.e(TAG, `parseInt '${content}' is not string. type = ${typeof (content)}`);
            return defInt;
        }

        try {
            return parseInt(content);
        } catch (e) {
            Logger.e(TAG, `parseInt '${content}' error: ${e}`);
        }

        return defInt;
    }

    static parseFloatSafe(content: any, defFloat?: number): number {
        if (content == null) {
            return defFloat;
        } if (JsUtils.isNumber(content)) {
            return content;
        } else if (!JsUtils.isString(content)) {
            Logger.e(TAG, `parseFloat '${content}' is not string. type = ${typeof (content)}`);
            return defFloat;
        }

        try {
            return parseFloat(content);
        } catch (e) {
            Logger.e(TAG, `parseFloat '${content}' error: ${e}`);
        }

        return defFloat;
    }
}
