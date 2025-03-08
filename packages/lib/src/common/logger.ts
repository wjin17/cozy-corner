export class Logger {
  /** Log a debug message */
  public static debug(message: string) {
    console.debug(`[DEBUG] ${message}`);
  }

  /** Log an info message */
  public static info(message: string) {
    console.info(`\x1b[32m[INFO] ${message}\x1b[0m`);
  }

  /** Log a warning message */
  public static warn(message: string) {
    console.warn(`\x1b[33m[WARN] ${message}\x1b[0m`);
  }

  /** Log an error message */
  public static error(message: string, ...args: any[]) {
    console.error(`\x1b[31m[ERROR] ${message}\x1b[0m`, ...args);
  }
}
