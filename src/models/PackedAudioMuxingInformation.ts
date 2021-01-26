import FragmentedMuxingInformation from './FragmentedMuxingInformation';
import MuxingInformationAudioTrack from './MuxingInformationAudioTrack';
import MuxingInformationVideoTrack from './MuxingInformationVideoTrack';

/**
 * @export
 * @class PackedAudioMuxingInformation
 */
export class PackedAudioMuxingInformation extends FragmentedMuxingInformation {
  constructor(obj?: Partial<PackedAudioMuxingInformation>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default PackedAudioMuxingInformation;

