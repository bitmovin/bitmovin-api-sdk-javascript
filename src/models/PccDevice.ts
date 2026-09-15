import {map, mapArray} from '../common/Mapper';
import PccCell from './PccCell';
import PccDeviceUnit from './PccDeviceUnit';

/**
 * @export
 * @class PccDevice
 */
export class PccDevice {
  /**
   * The device pool, as the reader is shown it. (required)
   * @type {string}
   * @memberof PccDevice
   */
  public name?: string;

  /**
   * True where no naming rule recognised this pool, so `name` is a stated placeholder rather than the pool's own. The units and sessions below still tell two such pools apart. (required)
   * @type {boolean}
   * @memberof PccDevice
   */
  public namePlaceholder?: boolean;

  /**
   * What distinguishes this pool from another of the same name, where anything does.
   * @type {string}
   * @memberof PccDevice
   */
  public qualifier?: string;

  /**
   * The fleet's own classification, such as `tv`, `desktop`, `stb` or `mobile`. Never one guessed from a name, and not a closed set: the fleet may answer with a kind this list does not name.
   * @type {string}
   * @memberof PccDevice
   */
  public deviceType?: string;

  /**
   * @type {string[]}
   * @memberof PccDevice
   */
  public sessionIds?: string[];

  /**
   * @type {PccDeviceUnit[]}
   * @memberof PccDevice
   */
  public units?: PccDeviceUnit[];

  /**
   * Every player version that measured this pool. More than one means the runs spanned a player release. (required)
   * @type {string[]}
   * @memberof PccDevice
   */
  public playerVersions?: string[];

  /**
   * One per column, in `combinations` order. (required)
   * @type {PccCell[]}
   * @memberof PccDevice
   */
  public cells?: PccCell[];

  constructor(obj?: Partial<PccDevice>) {
    if(!obj) {
      return;
    }
    this.name = map(obj.name);
    this.namePlaceholder = map(obj.namePlaceholder);
    this.qualifier = map(obj.qualifier);
    this.deviceType = map(obj.deviceType);
    this.sessionIds = mapArray(obj.sessionIds);
    this.units = mapArray(obj.units, PccDeviceUnit);
    this.playerVersions = mapArray(obj.playerVersions);
    this.cells = mapArray(obj.cells, PccCell);
  }
}

export default PccDevice;

