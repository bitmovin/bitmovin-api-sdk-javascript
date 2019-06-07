import Logger from './Logger';

export class ConsoleLogger implements Logger {
   log(message: string, data?: any) {
    console.log.apply(console, arguments);
   }

   error(message: string, data?: any) {
     console.log.apply(console, arguments);
   }
}

export default ConsoleLogger;
