import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import InputPath from './InputPath';

/**
 * @export
 * @class SccCaption
 */
export class SccCaption extends BitmovinResource {
  constructor(obj: any) {
    super(obj);
    this.input = map<InputPath>(obj.input, InputPath);
  }

  /**
   * The input location to get the scc file from (required)
   * @type {InputPath}
   * @memberof SccCaption
   */
  public input: InputPath;
}

export default SccCaption;

