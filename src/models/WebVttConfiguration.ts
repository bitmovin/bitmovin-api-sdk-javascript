import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';

/**
 * @export
 * @class WebVttConfiguration
 */
export class WebVttConfiguration extends BitmovinResource {
  constructor(obj: Partial<WebVttConfiguration>) {
    super(obj);
  }
}

export default WebVttConfiguration;

