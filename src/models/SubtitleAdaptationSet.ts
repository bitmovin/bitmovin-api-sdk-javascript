import {map, mapArray} from '../common/Mapper';
import Accessibility from './Accessibility';
import AdaptationSet from './AdaptationSet';
import AdaptationSetRole from './AdaptationSetRole';
import AdaptationSetType from './AdaptationSetType';
import CustomAttribute from './CustomAttribute';
import Label from './Label';

/**
 * @export
 * @class SubtitleAdaptationSet
 */
export class SubtitleAdaptationSet extends AdaptationSet {
  /**
   * Discriminator property for AdaptationSet
   * @type {string}
   * @memberof SubtitleAdaptationSet
   */
  public type: AdaptationSetType.SUBTITLE = AdaptationSetType.SUBTITLE;

  /**
   * ISO 639-1 (Alpha-2) code identifying the language of the subtitle adaptation set (required)
   * @type {string}
   * @memberof SubtitleAdaptationSet
   */
  public lang?: string;

  constructor(obj?: Partial<SubtitleAdaptationSet>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.lang = map(obj.lang);
  }
}

export default SubtitleAdaptationSet;

