import { JsUtils } from "./js-utils";

/**
 * @author arnozhang
 * @date 2019/06/25
 */

const TAG = 'MiscUtils';

export class MiscUtils {

    static currentTimeMillis(): number {
        return new Date().getTime();
    }

    static formatBytes(bytes: number, decimals?: number) {
        if (bytes === 0) {
            return "0 Bytes";
        }

        const k = 1024;
        const dm = decimals || 2;
        const sizes = [ "Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB" ];
        const i = Math.floor(Math.log(bytes) / Math.log(k));

        return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
    }

    static formatPercentage(value: string | number) {
        return `${MiscUtils.format2DecimalPlaces(value)}%`;
    }

    static format2DecimalPlaces(value: string | number): number {
        value = JsUtils.parseFloatSafe(value);
        return Math.round(value * 100) / 100;
    }

    static parseQueryString(queryString: string): { [key: string]: any } {
        const map = {};
        if (JsUtils.isEmpty(queryString)) {
            return map;
        }

        queryString = queryString[0] === '?' ? queryString.substr(1) : queryString;
        const pairs = queryString.split('&');
        for (let i = 0; i < pairs.length; i++) {
            const pair = pairs[i].split('=');
            map[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
        }

        return map;
    }

    static openInNewTab(url: string) {
        const win = window.open(url, '_blank');
        win.focus();
    }
}
