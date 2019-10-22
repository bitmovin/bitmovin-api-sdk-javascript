import {map, mapArray} from '../common/Mapper';
import PaddingSequence from './PaddingSequence';

/**
 * @export
 * @class ConcatenationInputConfiguration
 */
export class ConcatenationInputConfiguration {
  /**
   * The id of the input stream that should be used for concatenation. Can be either an ingest input stream, or the result of a trimming input stream
   * @type {string}
   * @memberof ConcatenationInputConfiguration
   */
  public inputStreamId?: string;

  /**
   * Exactly one input stream of a concatenation must have this set to true, which will be used as reference for scaling, aspect ratio, FPS, sample rate, etc. 
   * @type {boolean}
   * @memberof ConcatenationInputConfiguration
   */
  public isMain?: boolean;

  /**
   * Position of the stream
   * @type {number}
   * @memberof ConcatenationInputConfiguration
   */
  public position?: number;

  /**
   * Inserts a padding sequence (black frames and/or silent audio) before the input stream. If this is set, all video output streams of the encoding need to use the same ConcatenationInputStream.
   * @type {PaddingSequence}
   * @memberof ConcatenationInputConfiguration
   */
  public paddingBefore?: PaddingSequence;

  /**
   * Inserts a padding sequence (black frames and/or silent audio) after the input stream. If this is set, all video output streams of the encoding need to use the same ConcatenationInputStream.
   * @type {PaddingSequence}
   * @memberof ConcatenationInputConfiguration
   */
  public paddingAfter?: PaddingSequence;

  constructor(obj?: Partial<ConcatenationInputConfiguration>) {
    if(!obj) {
      return;
    }
    this.inputStreamId = map(obj.inputStreamId);
    this.isMain = map(obj.isMain);
    this.position = map(obj.position);
    this.paddingBefore = map(obj.paddingBefore, PaddingSequence);
    this.paddingAfter = map(obj.paddingAfter, PaddingSequence);
  }
}

export default ConcatenationInputConfiguration;

