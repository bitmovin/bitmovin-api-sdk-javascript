import {map, mapArray} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import InputPath from './InputPath';

/**
 * @export
 * @class SccCaption
 */
export class SccCaption extends BitmovinResource {
  /**
   * The input location to get the scc file from (required)
   * @type {InputPath}
   * @memberof SccCaption
   */
  public input?: InputPath;

  constructor(obj?: Partial<SccCaption>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.input = map(obj.input, InputPath);
  }
}

export default SccCaption;

