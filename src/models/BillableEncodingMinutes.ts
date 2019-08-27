import {map} from '../common/Mapper';
import BillableEncodingMinutesDetails from './BillableEncodingMinutesDetails';
import CodecConfigType from './CodecConfigType';
import EncodingMode from './EncodingMode';
import PsnrPerStreamMode from './PsnrPerStreamMode';
import StatisticsPerTitleStream from './StatisticsPerTitleStream';

/**
 * @export
 * @class BillableEncodingMinutes
 */
export class BillableEncodingMinutes {
  /**
   * @type {EncodingMode}
   * @memberof BillableEncodingMinutes
   */
  public encodingMode?: EncodingMode;

  /**
   * @type {CodecConfigType}
   * @memberof BillableEncodingMinutes
   */
  public codec?: CodecConfigType;

  /**
   * @type {StatisticsPerTitleStream}
   * @memberof BillableEncodingMinutes
   */
  public perTitleResultStream?: StatisticsPerTitleStream;

  /**
   * @type {PsnrPerStreamMode}
   * @memberof BillableEncodingMinutes
   */
  public psnrMode?: PsnrPerStreamMode;

  /**
   * @type {BillableEncodingMinutesDetails}
   * @memberof BillableEncodingMinutes
   */
  public billableMinutes?: BillableEncodingMinutesDetails;

  constructor(obj: Partial<BillableEncodingMinutes>) {

    this.encodingMode = obj.encodingMode;
    this.codec = obj.codec;
    this.perTitleResultStream = obj.perTitleResultStream;
    this.psnrMode = obj.psnrMode;
    this.billableMinutes = map<BillableEncodingMinutesDetails>(obj.billableMinutes, BillableEncodingMinutesDetails);
  }
}

export default BillableEncodingMinutes;

