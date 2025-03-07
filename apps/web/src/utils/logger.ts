export class Logger {
  public static debug(message: string) {
    console.debug(`[DEBUG] ${message}`);
  }

  public static info(message: string) {
    console.info(`\x1b[32m[INFO] ${message}\x1b[0m`);
  }

  public static warn(message: string) {
    console.warn(`\x1b[33m[WARN] ${message}\x1b[0m`);
  }

  public static error(message: string, ...args: any[]) {
    console.error(`\x1b[31m[ERROR] ${message}\x1b[0m`, ...args);
  }
}
