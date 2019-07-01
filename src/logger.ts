/**
 * @author arnozhang
 * @date 2019/06/25
 */

export class LogWriter {

    writeLog(message: string): void {
        console.log(message);
    }

    formatLog(level: String, tag: string, message: any) {
        return `${level} [${tag}]: ${message}`;
    }
}


export default class Logger {

    static writer?: LogWriter = new LogWriter();


    static v(tag: string, message: any) {
        Logger._log('Verbose', tag, message);
    }

    static d(tag: string, message: any) {
        Logger._log('Debug', tag, message);
    }

    static i(tag: string, message: any) {
        Logger._log('Info', tag, message);
    }

    static w(tag: string, message: any) {
        Logger._log('Warn', tag, message);
    }

    static e(tag: string, message: any) {
        Logger._log('Error', tag, message);
    }

    static f(tag: string, message: any) {
        Logger._log('Fatal', tag, message);
    }

    static _log(level: String, tag: string, message: any) {
        Logger.writer.writeLog(Logger.writer.formatLog(level, tag, message));
    }
}
