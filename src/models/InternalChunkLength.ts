import {map, mapArray} from '../common/Mapper';
import ChunkLengthMode from './ChunkLengthMode';

/**
 * @export
 * @class InternalChunkLength
 */
export class InternalChunkLength {
  /**
   * Defines how the internal chunk length for encoding will be determined (required)
   * @type {ChunkLengthMode}
   * @memberof InternalChunkLength
   */
  public mode?: ChunkLengthMode;

  /**
   * Defines a custom internal chunk length in seconds to be used for encoding if mode is set to `CUSTOM`. Valid range is from 1 to 180 seconds
   * @type {number}
   * @memberof InternalChunkLength
   */
  public customChunkLength?: number;

  constructor(obj?: Partial<InternalChunkLength>) {
    if(!obj) {
      return;
    }
    this.mode = map(obj.mode);
    this.customChunkLength = map(obj.customChunkLength);
  }
}

export default InternalChunkLength;

