import Logger from './Logger';

export class ConsoleLogger implements Logger {
  public async logRequest(request: any) {
    const { method, url, body } = request;

    let message = `request: ${method} ${url}`
    if (body) {
      message +=
        `\n  body: ${body}`;
    }

    console.log(message);
  }

  public async logResponse(response: any) {
    const { status } = response;
    let body = await response.text();

    let message = `response:\n` +
      `  httpStatusCode: ${status}`;

    if (body) {
      message +=
        `\n  body: ${body}`;
    }

    console.log(message);
  }
}

export default ConsoleLogger;
