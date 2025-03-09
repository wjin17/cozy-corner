export class Logger {
  /** Log an info message */
  public static info(message: string) {
    // eslint-disable-next-line no-console
    console.log(`\x1b[32m[INFO] ${message}\x1b[0m`);
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
