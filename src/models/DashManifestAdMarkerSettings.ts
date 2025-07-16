import {map, mapArray} from '../common/Mapper';
import DashScte35EventStreamSignalling from './DashScte35EventStreamSignalling';
import DashScte35PeriodOption from './DashScte35PeriodOption';

/**
 * An optional configuration object used to define SCTE-35 signaling for ad insertion or content segmentation.  This field enables precise control over signaling behavior at both the period and event stream levels,  making it suitable for dynamic ad insertion (DAI) and live streaming workflows. This follows the ANSI/SCTE 214-1 (2024) standard. 
 * @export
 * @class DashManifestAdMarkerSettings
 */
export class DashManifestAdMarkerSettings {
  /**
   * @type {DashScte35PeriodOption}
   * @memberof DashManifestAdMarkerSettings
   */
  public periodOption?: DashScte35PeriodOption;

  /**
   * @type {DashScte35EventStreamSignalling}
   * @memberof DashManifestAdMarkerSettings
   */
  public eventStreamSignalling?: DashScte35EventStreamSignalling;

  constructor(obj?: Partial<DashManifestAdMarkerSettings>) {
    if(!obj) {
      return;
    }
    this.periodOption = map(obj.periodOption);
    this.eventStreamSignalling = map(obj.eventStreamSignalling);
  }
}

export default DashManifestAdMarkerSettings;

