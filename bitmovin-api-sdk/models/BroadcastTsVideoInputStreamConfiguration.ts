import {map} from '../common/Mapper';
import BroadcastTsInputStreamConfiguration from './BroadcastTsInputStreamConfiguration';
import RaiUnit from './RaiUnit';

/**
 * @export
 * @class BroadcastTsVideoInputStreamConfiguration
 */
export default class BroadcastTsVideoInputStreamConfiguration extends BroadcastTsInputStreamConfiguration {
  constructor(obj: any) {
    super(obj);
    this.insertAccessUnitDelimiterInAvc = map(obj.insertAccessUnitDelimiterInAvc);
    this.maxDecodeDelay = map(obj.maxDecodeDelay);
  }

  /**
   * If true, add access unit delimiters (AUD) to AVC stream if AUD is missing from input elementary stream.
   * @type {boolean}
   * @memberof BroadcastTsVideoInputStreamConfiguration
   */
  public insertAccessUnitDelimiterInAvc?: boolean;
  /**
   * Maximum Decoder Delay in 90 KHz cycles. When non-zero, the difference between the PCR and the DTS for each picture as it is inserted into the output transport stream is limited to this number of 90 KHz cycles. Values below 1000 are treated as 0 and ignored. Valid Range [0, 1000-900000]
   * @type {number}
   * @memberof BroadcastTsVideoInputStreamConfiguration
   */
  public maxDecodeDelay?: number;
}
