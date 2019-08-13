import MuxingInformationAudioTrack from './MuxingInformationAudioTrack';
import MuxingInformationVideoTrack from './MuxingInformationVideoTrack';
import ProgressiveMuxingInformation from './ProgressiveMuxingInformation';

/**
 * @export
 * @class BroadcastTsMuxingInformation
 */
export class BroadcastTsMuxingInformation extends ProgressiveMuxingInformation {
  constructor(obj: Partial<BroadcastTsMuxingInformation>) {
    super(obj);
  }
}

export default BroadcastTsMuxingInformation;

