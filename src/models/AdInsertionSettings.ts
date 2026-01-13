import {map, mapArray} from '../common/Mapper';
import ClockSynchronizationMode from './ClockSynchronizationMode';

/**
 * @export
 * @class AdInsertionSettings
 */
export class AdInsertionSettings {
  /**
   * Enabling this allows on-demand insertion of ESAM MediaPoints. When enabled, the encoder ensures that at least one SCTE-35 data stream is available.
   * @type {boolean}
   * @memberof AdInsertionSettings
   */
  public enableEsamMediaPointInsertion?: boolean;

  /**
   * Mode of clock synchronization during ad insertion.  If an HLS manifest is configured that has a PDT source set, the encoder defaults to the equivalent clockSynchronizationMode.  If both, HLS PDT source and clockSynchronizationMode, are set and don't match, the encoding will fail. 
   * @type {ClockSynchronizationMode}
   * @memberof AdInsertionSettings
   */
  public clockSynchronizationMode?: ClockSynchronizationMode;

  constructor(obj?: Partial<AdInsertionSettings>) {
    if(!obj) {
      return;
    }
    this.enableEsamMediaPointInsertion = map(obj.enableEsamMediaPointInsertion);
    this.clockSynchronizationMode = map(obj.clockSynchronizationMode);
  }
}

export default AdInsertionSettings;

