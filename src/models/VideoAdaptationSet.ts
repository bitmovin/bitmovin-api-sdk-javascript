import Accessibility from './Accessibility';
import AdaptationSet from './AdaptationSet';
import AdaptationSetRole from './AdaptationSetRole';
import AdaptationSetType from './AdaptationSetType';
import CustomAttribute from './CustomAttribute';
import Label from './Label';

/**
 * @export
 * @class VideoAdaptationSet
 */
export class VideoAdaptationSet extends AdaptationSet {
  /**
   * Discriminator property for AdaptationSet
   * @type {string}
   * @memberof VideoAdaptationSet
   */
  public type: AdaptationSetType.VIDEO = AdaptationSetType.VIDEO;

  constructor(obj?: Partial<VideoAdaptationSet>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default VideoAdaptationSet;

