import {map, mapArray} from '../common/Mapper';
import BitmovinResponse from './BitmovinResponse';
import CloudRegion from './CloudRegion';
import StaticIpStatus from './StaticIpStatus';

/**
 * @export
 * @class StaticIp
 */
export class StaticIp extends BitmovinResponse {
  /**
   * The IPv4 address of the static ip
   * @type {string}
   * @memberof StaticIp
   */
  public ipAddress?: string;

  /**
   * Required if the static IP should be created for an AWS infrastructure account. If this is left blank the static Ip will be created for the managed cloud.
   * @type {string}
   * @memberof StaticIp
   */
  public infrastructureId?: string;

  /**
   * Status of the Static Ip
   * @type {StaticIpStatus}
   * @memberof StaticIp
   */
  public status?: StaticIpStatus;

  /**
   * The region of the static Ip (required)
   * @type {CloudRegion}
   * @memberof StaticIp
   */
  public region?: CloudRegion;

  constructor(obj?: Partial<StaticIp>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.ipAddress = map(obj.ipAddress);
    this.infrastructureId = map(obj.infrastructureId);
    this.status = map(obj.status);
    this.region = map(obj.region);
  }
}

export default StaticIp;

