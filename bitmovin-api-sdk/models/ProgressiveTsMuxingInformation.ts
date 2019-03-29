import {map} from '../common/Mapper';
import MuxingInformationAudioTrack from './MuxingInformationAudioTrack';
import MuxingInformationVideoTrack from './MuxingInformationVideoTrack';
import ProgressiveMuxingInformation from './ProgressiveMuxingInformation';
import ProgressiveTsMuxingInformationByteRanges from './ProgressiveTsMuxingInformationByteRanges';

/**
 * @export
 * @class ProgressiveTsMuxingInformation
 */
export default class ProgressiveTsMuxingInformation extends ProgressiveMuxingInformation {
  constructor(obj: any) {
    super(obj);
    this.byteRanges = map<ProgressiveTsMuxingInformationByteRanges>(obj.byteRanges, ProgressiveTsMuxingInformationByteRanges);
  }

  /**
   * Byte ranges for the segments within the TS file
   * @type {Array<ProgressiveTsMuxingInformationByteRanges>}
   * @memberof ProgressiveTsMuxingInformation
   */
  public byteRanges?: Array<ProgressiveTsMuxingInformationByteRanges>;
}
