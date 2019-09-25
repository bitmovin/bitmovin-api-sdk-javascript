export interface Logger {
    logRequest(request: any): Promise<any>;
    logResponse(response: any): Promise<any>;
}

export default Logger;
