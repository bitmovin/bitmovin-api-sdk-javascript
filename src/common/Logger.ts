export interface Logger {
    log(message: string, data?: any);
    error(message: string, data?: any);
}

export default Logger;
