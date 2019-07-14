/**
 * @author arnozhang
 * @date 2019/06/25
 */

export class LogWriter {

    writeLog(message: string): void {
        console.log(message);
    }

    formatLog(level: String, tag: string, message: any): string {
        return `${level} [${tag}]: ${message}`;
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

    static v(tag: string, message: any) {
        Logger._log(LogLevel.verbose, tag, message);
    }

    static d(tag: string, message: any) {
        Logger._log(LogLevel.debug, tag, message);
    }

    static i(tag: string, message: any) {
        Logger._log(LogLevel.info, tag, message);
    }

    static w(tag: string, message: any) {
        Logger._log(LogLevel.warn, tag, message);
    }

    static e(tag: string, message: any) {
        Logger._log(LogLevel.error, tag, message);
    }

    static f(tag: string, message: any) {
        Logger._log(LogLevel.fatal, tag, message);
    }

    static _log(level: String, tag: string, message: any) {
        Logger.writer.writeLog(Logger.writer.formatLog(level, tag, message));
    }
}
