import BitmovinResource from './BitmovinResource';

/**
 * @export
 * @class ObjectDetectionConfiguration
 */
export class ObjectDetectionConfiguration extends BitmovinResource {
  constructor(obj?: Partial<ObjectDetectionConfiguration>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default ObjectDetectionConfiguration;

