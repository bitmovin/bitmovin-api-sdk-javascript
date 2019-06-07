import Logger from './Logger';

export class NullLogger implements Logger {
  public log(message: string, data?: any) {
    return;
  }

  public error(message: string, data?: any) {
    return;
  }
}

export default NullLogger;
