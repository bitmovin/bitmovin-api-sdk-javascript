import {map, mapArray} from '../common/Mapper';
import EncodingOutputPathsForOutput from './EncodingOutputPathsForOutput';
import Output from './Output';

/**
 * @export
 * @class EncodingOutputPaths
 */
export class EncodingOutputPaths {
  /**
   * @type {Output}
   * @memberof EncodingOutputPaths
   */
  public output?: Output;

  /**
   * @type {EncodingOutputPathsForOutput}
   * @memberof EncodingOutputPaths
   */
  public paths?: EncodingOutputPathsForOutput;

  constructor(obj?: Partial<EncodingOutputPaths>) {
    if(!obj) {
      return;
    }
    this.output = map(obj.output, Output);
    this.paths = map(obj.paths, EncodingOutputPathsForOutput);
  }
}

export default EncodingOutputPaths;

