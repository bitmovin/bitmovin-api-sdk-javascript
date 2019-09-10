import Accessibility from './Accessibility';
import AdaptationSet from './AdaptationSet';
import AdaptationSetRole from './AdaptationSetRole';
import CustomAttribute from './CustomAttribute';

/**
 * @export
 * @class VideoAdaptationSet
 */
export class VideoAdaptationSet extends AdaptationSet {
  constructor(obj?: Partial<VideoAdaptationSet>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default VideoAdaptationSet;

