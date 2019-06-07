import {map} from '../common/Mapper';
import MuxingInformationAudioTrack from './MuxingInformationAudioTrack';
import MuxingInformationVideoTrack from './MuxingInformationVideoTrack';
import ProgressiveMuxingInformation from './ProgressiveMuxingInformation';

/**
 * @export
 * @class ProgressiveWebmMuxingInformation
 */
export class ProgressiveWebmMuxingInformation extends ProgressiveMuxingInformation {
  constructor(obj: any) {
    super(obj);
  }

}

export default ProgressiveWebmMuxingInformation;

