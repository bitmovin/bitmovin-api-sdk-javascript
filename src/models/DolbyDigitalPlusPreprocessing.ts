import {map, mapArray} from '../common/Mapper';
import DolbyDigitalPlusDynamicRangeCompression from './DolbyDigitalPlusDynamicRangeCompression';
import DolbyDigitalPlusLfeLowPassFilter from './DolbyDigitalPlusLfeLowPassFilter';
import DolbyDigitalPlusNinetyDegreePhaseShift from './DolbyDigitalPlusNinetyDegreePhaseShift';
import DolbyDigitalPlusThreeDbAttenuation from './DolbyDigitalPlusThreeDbAttenuation';

/**
 * @export
 * @class DolbyDigitalPlusPreprocessing
 */
export class DolbyDigitalPlusPreprocessing {
  /**
   * It indicates a gain change to be applied in the Dolby Digital decoder in order to implement dynamic range compression.  The values typically indicate gain reductions (cut) during loud passages and gain increases (boost) during quiet passages based on desired compression characteristics. 
   * @type {DolbyDigitalPlusDynamicRangeCompression}
   * @memberof DolbyDigitalPlusPreprocessing
   */
  public dynamicRangeCompression?: DolbyDigitalPlusDynamicRangeCompression;

  /**
   * It applies a 120 Hz low-pass filter to the low-frequency effects (LFE) channel.  This is only allowed if the `channelLayout` contains a LFE channel. 
   * @type {DolbyDigitalPlusLfeLowPassFilter}
   * @memberof DolbyDigitalPlusPreprocessing
   */
  public lfeLowPassFilter?: DolbyDigitalPlusLfeLowPassFilter;

  /**
   * @type {DolbyDigitalPlusNinetyDegreePhaseShift}
   * @memberof DolbyDigitalPlusPreprocessing
   */
  public ninetyDegreePhaseShift?: DolbyDigitalPlusNinetyDegreePhaseShift;

  /**
   * @type {DolbyDigitalPlusThreeDbAttenuation}
   * @memberof DolbyDigitalPlusPreprocessing
   */
  public threeDbAttenuation?: DolbyDigitalPlusThreeDbAttenuation;

  constructor(obj?: Partial<DolbyDigitalPlusPreprocessing>) {
    if(!obj) {
      return;
    }
    this.dynamicRangeCompression = map(obj.dynamicRangeCompression, DolbyDigitalPlusDynamicRangeCompression);
    this.lfeLowPassFilter = map(obj.lfeLowPassFilter);
    this.ninetyDegreePhaseShift = map(obj.ninetyDegreePhaseShift);
    this.threeDbAttenuation = map(obj.threeDbAttenuation);
  }
}

export default DolbyDigitalPlusPreprocessing;

