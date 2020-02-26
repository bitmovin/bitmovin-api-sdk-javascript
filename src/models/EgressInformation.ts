import {map, mapArray} from '../common/Mapper';
import CloudRegion from './CloudRegion';
import EgressCategory from './EgressCategory';
import OutputType from './OutputType';

/**
 * @export
 * @class EgressInformation
 */
export class EgressInformation {
  /**
   * @type {EgressCategory}
   * @memberof EgressInformation
   */
  public category?: EgressCategory;

  /**
   * The number of bytes that have been transferred to the output (required)
   * @type {number}
   * @memberof EgressInformation
   */
  public bytes?: number;

  /**
   * @type {OutputType}
   * @memberof EgressInformation
   */
  public outputType?: OutputType;

  /**
   * @type {CloudRegion}
   * @memberof EgressInformation
   */
  public outputRegion?: CloudRegion;

  constructor(obj?: Partial<EgressInformation>) {
    if(!obj) {
      return;
    }
    this.category = map(obj.category);
    this.bytes = map(obj.bytes);
    this.outputType = map(obj.outputType);
    this.outputRegion = map(obj.outputRegion);
  }
}

export default EgressInformation;

