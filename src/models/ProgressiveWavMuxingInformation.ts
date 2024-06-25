import MuxingInformationAudioTrack from './MuxingInformationAudioTrack';
import MuxingInformationVideoTrack from './MuxingInformationVideoTrack';
import ProgressiveMuxingInformation from './ProgressiveMuxingInformation';

/**
 * @export
 * @class ProgressiveWavMuxingInformation
 */
export class ProgressiveWavMuxingInformation extends ProgressiveMuxingInformation {
  constructor(obj?: Partial<ProgressiveWavMuxingInformation>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default ProgressiveWavMuxingInformation;

