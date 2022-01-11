import {map, mapArray} from '../common/Mapper';
import Accessibility from './Accessibility';
import AdaptationSet from './AdaptationSet';
import AdaptationSetRole from './AdaptationSetRole';
import AdaptationSetType from './AdaptationSetType';
import CustomAttribute from './CustomAttribute';
import Label from './Label';

/**
 * @export
 * @class AudioAdaptationSet
 */
export class AudioAdaptationSet extends AdaptationSet {
  /**
   * Discriminator property for AdaptationSet
   * @type {string}
   * @memberof AudioAdaptationSet
   */
  public readonly type: AdaptationSetType = AdaptationSetType.AUDIO;

  /**
   * ISO 639-1 (Alpha-2) code identifying the language of the audio adaptation set (required)
   * @type {string}
   * @memberof AudioAdaptationSet
   */
  public lang?: string;

  constructor(obj?: Partial<AudioAdaptationSet>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.lang = map(obj.lang);
  }
}

export default AudioAdaptationSet;

