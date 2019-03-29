import Logger from './Logger';

export default class NullLogger implements Logger {
  public log(message: string, data?: any) {
    return;
  }

  public error(message: string, data?: any) {
    return;
  }
}
