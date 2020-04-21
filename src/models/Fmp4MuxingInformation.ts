import FragmentedMuxingInformation from './FragmentedMuxingInformation';
import MuxingInformationAudioTrack from './MuxingInformationAudioTrack';
import MuxingInformationVideoTrack from './MuxingInformationVideoTrack';

/**
 * @export
 * @class Fmp4MuxingInformation
 */
export class Fmp4MuxingInformation extends FragmentedMuxingInformation {
  constructor(obj?: Partial<Fmp4MuxingInformation>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default Fmp4MuxingInformation;

