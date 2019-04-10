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
export default class BillableEncodingMinutes {
  constructor(obj: any) {
    this.encodingMode = map(obj.encodingMode);
    this.codec = map(obj.codec);
    this.perTitleResultStream = map(obj.perTitleResultStream);
    this.psnrMode = map(obj.psnrMode);
    this.billableMinutes = map<BillableEncodingMinutesDetails>(obj.billableMinutes, BillableEncodingMinutesDetails);
  }

  /**
   * @type {EncodingMode}
   * @memberof BillableEncodingMinutes
   */
  public encodingMode?: EncodingMode;
  /**
   * @type {CodecConfigType}
   * @memberof BillableEncodingMinutes
   */
  public codec: CodecConfigType;
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
}
