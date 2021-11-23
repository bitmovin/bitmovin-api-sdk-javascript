import Accessibility from './Accessibility';
import AdaptationSet from './AdaptationSet';
import AdaptationSetRole from './AdaptationSetRole';
import CustomAttribute from './CustomAttribute';
import Label from './Label';

/**
 * @export
 * @class ImageAdaptationSet
 */
export class ImageAdaptationSet extends AdaptationSet {
  constructor(obj?: Partial<ImageAdaptationSet>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default ImageAdaptationSet;

