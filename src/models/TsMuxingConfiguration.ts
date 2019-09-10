import {map, mapArray} from '../common/Mapper';
import TsAudioStreamConfiguration from './TsAudioStreamConfiguration';
import TsProgramClockReferenceConfiguration from './TsProgramClockReferenceConfiguration';
import TsProgramMapTableConfiguration from './TsProgramMapTableConfiguration';
import TsVideoStreamConfiguration from './TsVideoStreamConfiguration';

/**
 * @export
 * @class TsMuxingConfiguration
 */
export class TsMuxingConfiguration {
  /**
   * An integer value. Value for program_number field in the MPEG Transport Stream Program Map Table (PMT). The value zero is reserved for the NIT PID entry in the PAT.
   * @type {number}
   * @memberof TsMuxingConfiguration
   */
  public programNumber?: number;

  /**
   * @type {TsProgramMapTableConfiguration}
   * @memberof TsMuxingConfiguration
   */
  public pmt?: TsProgramMapTableConfiguration;

  /**
   * @type {TsProgramClockReferenceConfiguration}
   * @memberof TsMuxingConfiguration
   */
  public pcr?: TsProgramClockReferenceConfiguration;

  /**
   * @type {TsVideoStreamConfiguration[]}
   * @memberof TsMuxingConfiguration
   */
  public videoStreams?: TsVideoStreamConfiguration[];

  /**
   * @type {TsAudioStreamConfiguration[]}
   * @memberof TsMuxingConfiguration
   */
  public audioStreams?: TsAudioStreamConfiguration[];

  constructor(obj?: Partial<TsMuxingConfiguration>) {
    if(!obj) {
      return;
    }
    this.programNumber = map(obj.programNumber);
    this.pmt = map(obj.pmt, TsProgramMapTableConfiguration);
    this.pcr = map(obj.pcr, TsProgramClockReferenceConfiguration);
    this.videoStreams = mapArray(obj.videoStreams, TsVideoStreamConfiguration);
    this.audioStreams = mapArray(obj.audioStreams, TsAudioStreamConfiguration);
  }
}

export default TsMuxingConfiguration;

