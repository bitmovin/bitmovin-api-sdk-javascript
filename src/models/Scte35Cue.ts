import {map, mapArray} from '../common/Mapper';
import BitmovinResponse from './BitmovinResponse';

/**
 * @export
 * @class Scte35Cue
 */
export class Scte35Cue extends BitmovinResponse {
  /**
   * Cue out duration in seconds. (required)
   * @type {number}
   * @memberof Scte35Cue
   */
  public cueDuration?: number;

  /**
   * The ids of the manifests to update. If this property is not set, all the manifests tied to the encoding are updated.
   * @type {string[]}
   * @memberof Scte35Cue
   */
  public manifestIds?: string[];

  constructor(obj?: Partial<Scte35Cue>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.cueDuration = map(obj.cueDuration);
    this.manifestIds = mapArray(obj.manifestIds);
  }
}

export default Scte35Cue;

