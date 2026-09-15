import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class PccDeviceUnit
 */
export class PccDeviceUnit {
  /**
   * The fleet's identifier for one physical machine, so two rows of the same pool can be told apart. (required)
   * @type {string}
   * @memberof PccDeviceUnit
   */
  public unitId?: string;

  /**
   * @type {string[]}
   * @memberof PccDeviceUnit
   */
  public sessionIds?: string[];

  /**
   * @type {string}
   * @memberof PccDeviceUnit
   */
  public browserVersion?: string;

  /**
   * @type {string}
   * @memberof PccDeviceUnit
   */
  public osVersion?: string;

  /**
   * Attribute tags such as `webos:firmwareVersion:33.23.05`, which is where a television's firmware lives.
   * @type {string[]}
   * @memberof PccDeviceUnit
   */
  public tags?: string[];

  constructor(obj?: Partial<PccDeviceUnit>) {
    if(!obj) {
      return;
    }
    this.unitId = map(obj.unitId);
    this.sessionIds = mapArray(obj.sessionIds);
    this.browserVersion = map(obj.browserVersion);
    this.osVersion = map(obj.osVersion);
    this.tags = mapArray(obj.tags);
  }
}

export default PccDeviceUnit;

