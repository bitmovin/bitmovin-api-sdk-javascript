import Logger from './Logger';

export class NullLogger implements Logger {
  public async logRequest(request: any) {
    return;
  }

  public async logResponse(response: any) {
    return;
  }
}

export default NullLogger;
