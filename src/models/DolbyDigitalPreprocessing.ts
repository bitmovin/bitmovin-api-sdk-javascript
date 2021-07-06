import {map, mapArray} from '../common/Mapper';
import DolbyDigitalDynamicRangeCompression from './DolbyDigitalDynamicRangeCompression';
import DolbyDigitalLfeLowPassFilter from './DolbyDigitalLfeLowPassFilter';
import DolbyDigitalNinetyDegreePhaseShift from './DolbyDigitalNinetyDegreePhaseShift';
import DolbyDigitalThreeDbAttenuation from './DolbyDigitalThreeDbAttenuation';

/**
 * @export
 * @class DolbyDigitalPreprocessing
 */
export class DolbyDigitalPreprocessing {
  /**
   * It indicates a gain change to be applied in the Dolby Digital decoder in order to implement dynamic range compression.  The values typically indicate gain reductions (cut) during loud passages and gain increases (boost) during quiet passages based on desired compression characteristics. 
   * @type {DolbyDigitalDynamicRangeCompression}
   * @memberof DolbyDigitalPreprocessing
   */
  public dynamicRangeCompression?: DolbyDigitalDynamicRangeCompression;

  /**
   * It applies a 120 Hz low-pass filter to the low-frequency effects (LFE) channel.  This is only allowed if the `channelLayout` contains a LFE channel. 
   * @type {DolbyDigitalLfeLowPassFilter}
   * @memberof DolbyDigitalPreprocessing
   */
  public lfeLowPassFilter?: DolbyDigitalLfeLowPassFilter;

  /**
   * @type {DolbyDigitalNinetyDegreePhaseShift}
   * @memberof DolbyDigitalPreprocessing
   */
  public ninetyDegreePhaseShift?: DolbyDigitalNinetyDegreePhaseShift;

  /**
   * @type {DolbyDigitalThreeDbAttenuation}
   * @memberof DolbyDigitalPreprocessing
   */
  public threeDbAttenuation?: DolbyDigitalThreeDbAttenuation;

  constructor(obj?: Partial<DolbyDigitalPreprocessing>) {
    if(!obj) {
      return;
    }
    this.dynamicRangeCompression = map(obj.dynamicRangeCompression, DolbyDigitalDynamicRangeCompression);
    this.lfeLowPassFilter = map(obj.lfeLowPassFilter);
    this.ninetyDegreePhaseShift = map(obj.ninetyDegreePhaseShift);
    this.threeDbAttenuation = map(obj.threeDbAttenuation);
  }
}

export default DolbyDigitalPreprocessing;

