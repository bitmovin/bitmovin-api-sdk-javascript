import {map} from '../common/Mapper';
import TsAudioStreamConfiguration from './TsAudioStreamConfiguration';
import TsProgramClockReferenceConfiguration from './TsProgramClockReferenceConfiguration';
import TsProgramMapTableConfiguration from './TsProgramMapTableConfiguration';
import TsVideoStreamConfiguration from './TsVideoStreamConfiguration';

/**
 * @export
 * @class TsMuxingConfiguration
 */
export class TsMuxingConfiguration {
  constructor(obj: any) {
    this.programNumber = map(obj.programNumber);
    this.pmt = map<TsProgramMapTableConfiguration>(obj.pmt, TsProgramMapTableConfiguration);
    this.pcr = map<TsProgramClockReferenceConfiguration>(obj.pcr, TsProgramClockReferenceConfiguration);
    this.videoStreams = map<TsVideoStreamConfiguration>(obj.videoStreams, TsVideoStreamConfiguration);
    this.audioStreams = map<TsAudioStreamConfiguration>(obj.audioStreams, TsAudioStreamConfiguration);
  }

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
   * @type {Array<TsVideoStreamConfiguration>}
   * @memberof TsMuxingConfiguration
   */
  public videoStreams?: Array<TsVideoStreamConfiguration>;
  /**
   * @type {Array<TsAudioStreamConfiguration>}
   * @memberof TsMuxingConfiguration
   */
  public audioStreams?: Array<TsAudioStreamConfiguration>;
}

export default TsMuxingConfiguration;

