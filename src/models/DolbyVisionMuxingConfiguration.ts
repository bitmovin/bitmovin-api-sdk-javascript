import {map, mapArray} from '../common/Mapper';
import DolbyVisionTrackSampleEntryName from './DolbyVisionTrackSampleEntryName';

/**
 * @export
 * @class DolbyVisionMuxingConfiguration
 */
export class DolbyVisionMuxingConfiguration {
  /**
   * @type {DolbyVisionTrackSampleEntryName}
   * @memberof DolbyVisionMuxingConfiguration
   */
  public trackSampleEntryName?: DolbyVisionTrackSampleEntryName;

  constructor(obj?: Partial<DolbyVisionMuxingConfiguration>) {
    if(!obj) {
      return;
    }
    this.trackSampleEntryName = map(obj.trackSampleEntryName);
  }
}

export default DolbyVisionMuxingConfiguration;

