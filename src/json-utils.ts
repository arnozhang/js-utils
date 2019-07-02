import JsUtils from "./js-utils";
import Logger from "./logger";

/**
 * @author arnozhang
 * @date 2019/06/25
 */

const TAG = 'JsonUtils';

export type ErrorHandler = (err: string) => void;

export default class JsonUtils {

    static parseObjectSafe(content: string, defObject?: object): object {
        try {
            let result = JSON.parse(content);
            if (JsUtils.isObject(result)) {
                return result;
            }
        } catch (e) {
            Logger.e(TAG, `parseObjectSafe error: ${e}`);
        }

        return defObject;
    }

    static parseArraySafe(content: string, defArray?: any[]): any[] {
        try {
            let result = JSON.parse(content);
            if (JsUtils.isArray(result)) {
                return result;
            }
        } catch (e) {
            Logger.e(TAG, `parseArraySafe error: ${e}`);
        }

        return defArray;
    }

    static toJSONString(value: any, pretty?: boolean): string {
        if (pretty == true) {
            return JSON.stringify(value, null, 2);
        }

        return JSON.stringify(value);
    }

    static removeUndefinedFields(value: any) {
        if (JsUtils.isObject(value)) {
            for (const name of Object.keys(value)) {
                let item = value[name];
                if (item == null || item == undefined) {
                    delete value[name];
                } else {
                    JsonUtils.removeUndefinedFields(item);
                }
            }
        }
    }

    static prettyJsonString(
        value: any, indent?: number, error?: ErrorHandler): string {

        try {
            if (JsUtils.isString(value)) {
                value = JSON.parse(value);
            }

            return JSON.stringify(value, null, indent != null ? indent : 2);
        } catch (e) {
            if (error) {
                error(`${e}`);
            }
        }

        return null;
    }
}
