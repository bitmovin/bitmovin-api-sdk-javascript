import {map, mapArray} from '../common/Mapper';
import Accessibility from './Accessibility';
import AdaptationSetRole from './AdaptationSetRole';
import AdaptationSetType from './AdaptationSetType';
import AudioAdaptationSet from './AudioAdaptationSet';
import BitmovinResponse from './BitmovinResponse';
import CustomAttribute from './CustomAttribute';
import ImageAdaptationSet from './ImageAdaptationSet';
import Label from './Label';
import SubtitleAdaptationSet from './SubtitleAdaptationSet';
import VideoAdaptationSet from './VideoAdaptationSet';

export type AdaptationSetUnion =
  VideoAdaptationSet |
  AudioAdaptationSet |
  ImageAdaptationSet |
  SubtitleAdaptationSet;

/**
 * @export
 * @class AdaptationSet
 */
export class AdaptationSet extends BitmovinResponse {
  protected static readonly _discriminatorName = 'type';
  protected static readonly _discriminatorMapping: { [key in keyof typeof AdaptationSetType]: string; } = {
    VIDEO: 'VideoAdaptationSet',
    AUDIO: 'AudioAdaptationSet',
    IMAGE: 'ImageAdaptationSet',
    SUBTITLE: 'SubtitleAdaptationSet'
  };

  /**
   * Custom adaptation set attributes
   * @type {CustomAttribute[]}
   * @memberof AdaptationSet
   */
  public customAttributes?: CustomAttribute[];

  /**
   * Roles of the adaptation set
   * @type {AdaptationSetRole[]}
   * @memberof AdaptationSet
   */
  public roles?: AdaptationSetRole[];

  /**
   * Provide signaling of CEA 607 and CEA 708
   * @type {Accessibility[]}
   * @memberof AdaptationSet
   */
  public accessibilities?: Accessibility[];

  /**
   * List of labels
   * @type {Label[]}
   * @memberof AdaptationSet
   */
  public labels?: Label[];

  constructor(obj?: Partial<AdaptationSet>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.customAttributes = mapArray(obj.customAttributes, CustomAttribute);
    this.roles = mapArray(obj.roles);
    this.accessibilities = mapArray(obj.accessibilities, Accessibility);
    this.labels = mapArray(obj.labels, Label);
  }
}

export default AdaptationSet;

