import * as models from '../models';

export type Callable<T> = new(obj: any) => T;

export function getType<T>(value: any, clazz: Callable<T>) {
  const type = (clazz as any).typeMap[value.type];
  return models[type];
}

export function map<T>(value: any, clazz?: Callable<T>): any | T[] | T {
  if (!clazz || typeof clazz !== 'function') {
    return value;
  }

  if (value == undefined) {
    return;
  }

  if (Array.isArray(value)) {
    if (value[0] && value[0].type && clazz.hasOwnProperty('typeMap')) {
      const type = getType<T>(value[0], clazz);
      return value.map(i => map(i, type));
    }

    return value.map(i => new clazz(i));
  }

  if (clazz && (clazz as any).hasOwnProperty('typeMap') && value.type) {
    const type = models[(clazz as any).typeMap[value.type]];
    return map<T>(value, type);
  }

  return new clazz(value);
}
