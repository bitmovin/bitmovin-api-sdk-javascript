import MuxingInformationAudioTrack from './MuxingInformationAudioTrack';
import MuxingInformationVideoTrack from './MuxingInformationVideoTrack';
import ProgressiveMuxingInformation from './ProgressiveMuxingInformation';

/**
 * @export
 * @class ProgressiveMovMuxingInformation
 */
export class ProgressiveMovMuxingInformation extends ProgressiveMuxingInformation {
  constructor(obj: Partial<ProgressiveMovMuxingInformation>) {
    super(obj);
  }
}

export default ProgressiveMovMuxingInformation;

