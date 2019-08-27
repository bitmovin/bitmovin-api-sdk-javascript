import MuxingInformationAudioTrack from './MuxingInformationAudioTrack';
import MuxingInformationVideoTrack from './MuxingInformationVideoTrack';
import ProgressiveMuxingInformation from './ProgressiveMuxingInformation';

/**
 * @export
 * @class Mp4MuxingInformation
 */
export class Mp4MuxingInformation extends ProgressiveMuxingInformation {
  constructor(obj: Partial<Mp4MuxingInformation>) {
    super(obj);

  }
}

export default Mp4MuxingInformation;

