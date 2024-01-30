import {map, mapArray} from '../common/Mapper';
import StreamKeyConfigurationType from './StreamKeyConfigurationType';

/**
 * @export
 * @class StreamKeyConfiguration
 */
export class StreamKeyConfiguration {
  /**
   * @type {StreamKeyConfigurationType}
   * @memberof StreamKeyConfiguration
   */
  public type?: StreamKeyConfigurationType;

  /**
   * Id of the previously generated stream key.  Only needed when the type is `ASSIGN`. 
   * @type {string}
   * @memberof StreamKeyConfiguration
   */
  public streamKeyId?: string;

  constructor(obj?: Partial<StreamKeyConfiguration>) {
    if(!obj) {
      return;
    }
    this.type = map(obj.type);
    this.streamKeyId = map(obj.streamKeyId);
  }
}

export default StreamKeyConfiguration;

