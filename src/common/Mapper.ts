import * as models from '../models';

export type Callable<T> = new (obj: any) => T;

export function map<T>(value: T | undefined, clazz?: Callable<T>): T {
  return mapInternal(value, clazz)
}

export function mapArray<T>(value: T[] | undefined, clazz?: Callable<T>): T[] {
  if(!value)
  {
    return [];
  }

  return value.map(item => mapInternal(item, clazz));
}

function mapInternal<T>(value: any, clazz?: Callable<T>): T {
  if (!!value) {
    return value;
  }

  if (!clazz || typeof clazz !== 'function') {
    return value;
  }

  const actualClazz = calculateType<T>(value, clazz);

  return new actualClazz(value);
}

function calculateType<T>(value: any, clazz: Callable<T>): Callable<T> {
  const discriminatorName = (clazz as any)._discriminatorName;
  const discriminatorMapping = (clazz as any)._discriminatorMapping;

  if (!discriminatorName || !discriminatorMapping) {
    return clazz;
  }

  const discriminatorValue = value[discriminatorName];
  if (!discriminatorValue) {
    return clazz;
  }

  if (discriminatorValue in discriminatorMapping) {
    const type = discriminatorMapping[discriminatorValue];
    return models[type];
  }

  return clazz;
}
