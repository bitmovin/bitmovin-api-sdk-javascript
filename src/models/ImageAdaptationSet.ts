import Accessibility from './Accessibility';
import AdaptationSet from './AdaptationSet';
import AdaptationSetRole from './AdaptationSetRole';
import AdaptationSetType from './AdaptationSetType';
import CustomAttribute from './CustomAttribute';
import Label from './Label';

/**
 * @export
 * @class ImageAdaptationSet
 */
export class ImageAdaptationSet extends AdaptationSet {
  /**
   * Discriminator property for AdaptationSet
   * @type {string}
   * @memberof ImageAdaptationSet
   */
  public readonly type: AdaptationSetType = AdaptationSetType.IMAGE;

  constructor(obj?: Partial<ImageAdaptationSet>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default ImageAdaptationSet;

