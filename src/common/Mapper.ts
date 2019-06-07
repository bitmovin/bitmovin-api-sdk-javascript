export interface Callable<T> {
   new(obj: any): T;
}

export function map<T>(value: any, clazz?: Callable<T>): any | Array<T> | T {
 if (!clazz || typeof clazz !== 'function') {
  return value;
 }

 if (value) {
   if (Array.isArray(value)) {
     return value.map(i => new clazz(i));
   } else {
     return new clazz(value);
   }
 }
}
