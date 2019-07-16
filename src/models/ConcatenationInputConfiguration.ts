import {map} from '../common/Mapper';

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

  constructor(obj: Partial<ConcatenationInputConfiguration>) {
    this.inputStreamId = map(obj.inputStreamId);
    this.isMain = map(obj.isMain);
    this.position = map(obj.position);
  }
}

export default ConcatenationInputConfiguration;

