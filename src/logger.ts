/**
 * @author arnozhang
 * @date 2019/06/25
 */

export class LogWriter {

    writeLog(message: string): void {
        console.log(message);
    }

    formatLog(level: String, tagOrMessage: any, message?: any): string {
        if (message != null) {
            return `${level} [${tagOrMessage}]: ${message}`;
        }

        return `${level} ${tagOrMessage}`;
    }
}


export enum LogLevel {
    verbose = 'Verbose',
    debug = 'Debug',
    info = 'Info',
    warn = 'Warn',
    error = 'Error',
    fatal = 'Fatal'
}


export default class Logger {

    static writer?: LogWriter = new LogWriter();


    static customizeWriter(newWriter: LogWriter): void {
        Logger.writer = newWriter;
    }

    static v(tagOrMessage: any, message?: any) {
        Logger._log(LogLevel.verbose, tagOrMessage, message);
    }

    static d(tagOrMessage: any, message?: any) {
        Logger._log(LogLevel.debug, tagOrMessage, message);
    }

    static i(tagOrMessage: any, message?: any) {
        Logger._log(LogLevel.info, tagOrMessage, message);
    }

    static w(tagOrMessage: any, message?: any) {
        Logger._log(LogLevel.warn, tagOrMessage, message);
    }

    static e(tagOrMessage: any, message?: any) {
        Logger._log(LogLevel.error, tagOrMessage, message);
    }

    static f(tagOrMessage: any, message?: any) {
        Logger._log(LogLevel.fatal, tagOrMessage, message);
    }

    private static _log(level: String, tagOrMessage: any, message?: any) {
        Logger.writer.writeLog(Logger.writer.formatLog(level, tagOrMessage, message));
    }
}
