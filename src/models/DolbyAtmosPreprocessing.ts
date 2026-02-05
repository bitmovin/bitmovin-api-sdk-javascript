import {map, mapArray} from '../common/Mapper';
import DolbyAtmosDynamicRangeCompression from './DolbyAtmosDynamicRangeCompression';

/**
 * @export
 * @class DolbyAtmosPreprocessing
 */
export class DolbyAtmosPreprocessing {
  /**
   * It indicates a gain change to be applied in the Dolby Atmos decoder in order to implement dynamic range compression.  The values typically indicate gain reductions (cut) during loud passages and gain increases (boost) during quiet passages based on desired compression characteristics. 
   * @type {DolbyAtmosDynamicRangeCompression}
   * @memberof DolbyAtmosPreprocessing
   */
  public dynamicRangeCompression?: DolbyAtmosDynamicRangeCompression;

  constructor(obj?: Partial<DolbyAtmosPreprocessing>) {
    if(!obj) {
      return;
    }
    this.dynamicRangeCompression = map(obj.dynamicRangeCompression, DolbyAtmosDynamicRangeCompression);
  }
}

export default DolbyAtmosPreprocessing;

