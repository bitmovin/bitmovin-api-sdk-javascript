import MuxingInformationAudioTrack from './MuxingInformationAudioTrack';
import MuxingInformationVideoTrack from './MuxingInformationVideoTrack';
import ProgressiveMuxingInformation from './ProgressiveMuxingInformation';

/**
 * @export
 * @class ProgressiveWebmMuxingInformation
 */
export class ProgressiveWebmMuxingInformation extends ProgressiveMuxingInformation {
  constructor(obj?: Partial<ProgressiveWebmMuxingInformation>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default ProgressiveWebmMuxingInformation;

