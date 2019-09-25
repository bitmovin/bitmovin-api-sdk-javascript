import { Link, Message, ResponseErrorData } from '../models';
import BitmovinError from './BitmovinError';

function appendLine(message: string, messageToAppend: string) {
  return `${message}${messageToAppend}\n`;
}

function getShortMessage(additionalInfo: String, errorResponse: any) {
  let shortMessage = `Request failed: ${additionalInfo}`;

  if (errorResponse !== undefined && errorResponse.data !== undefined && errorResponse.data.message !== undefined) {
    shortMessage = errorResponse.data.message;
  }

  return shortMessage;
}

function buildBitmovinDetailMessage(details: Message) {
  let message = appendLine('', ` - id: ${details.id}`);

  message = appendLine(message, `   date: ${details.date}`);
  message = appendLine(message, `   type: ${details.type}`);
  message = appendLine(message, `   text: ${details.text}`);

  return details.field == undefined ? message : appendLine(message, `   field: ${details.field}`);
}

function appendRequestMessage(request: any) {
  let message = appendLine('', `request:`);

  message = appendLine(message, `  method: ${request.method}`);
  message = appendLine(message, `  url: ${request.url}`);

  return request.body == undefined ? message : appendLine(message, `  body: ${request.body}`);
}

function appendResponseMessage(response: any, errorResponse?: any) {
  let message = appendLine('', `response:`);

  message = appendLine(message, `  httpStatusCode: ${response.status}`);

  if (errorResponse) {
    let body = errorResponse;
    if (!(typeof body === 'string' || body instanceof String)) {
      body = JSON.stringify(body);
      message = appendLine(message, `  body: ${body}`);
    }
  }

  return message;
}

function buildDetails(details: Message[]) {
  let message = appendLine('', 'details:');

  for (const detail of Object.keys(details)) {
    message += buildBitmovinDetailMessage(details[detail]);
  }

  return message;
}

function buildLinks(links: Link[]) {
  let message = appendLine('', 'links:');

  for (const link of Object.keys(links)) {
    message = appendLine(message, `  ${links[link].title} ${links[link].href}`);
  }

  return message;
}

export function buildBitmovinError(additionalInfo: string, request: any, response: any, errorResponse?: any | string, error?: Error): BitmovinError {
  let code: number | undefined;
  let details: Message[] | undefined;
  let developerMessage: string | undefined;
  let links: Link[] | undefined;
  let requestId: string | undefined;
  const shortMessage = getShortMessage(additionalInfo, errorResponse);
  let message: string = appendLine('', shortMessage);

  if (errorResponse !== undefined && errorResponse.data !== undefined) {
    const data: ResponseErrorData = errorResponse.data;
    developerMessage = data.developerMessage;
    code = data.code;
    requestId = errorResponse.requestId;

    message = appendLine(message, `developerMessage: ${data.developerMessage}`);
    message = appendLine(message, `errorCode: ${data.code}`);

    if (Array.isArray(data.details)) {
      details = data.details;
      message += buildDetails(details);
    }

    if (Array.isArray(data.links)) {
      links = data.links;
      message += buildLinks(links);
    }
  }

  message += appendRequestMessage(request);
  message += appendResponseMessage(response, errorResponse);

  const bitmovinError = new BitmovinError(message, response.status, shortMessage, developerMessage, requestId, code, details, links);
  if (error && error.stack) {
    bitmovinError.stack = error.stack;
  }
  return bitmovinError;
}

export function buildBitmovinErrorFromError(request: any, error: Error): BitmovinError {
  const shortMessage = `Request failed: ${error.message}`
  let message: string = appendLine('', shortMessage);

  message += appendRequestMessage(request);

  const bitmovinError = new BitmovinError(message, 0, shortMessage, shortMessage);
  if (error.stack) {
    bitmovinError.stack = error.stack;
  }
  return bitmovinError;
}
