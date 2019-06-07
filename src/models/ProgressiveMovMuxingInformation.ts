import {map} from '../common/Mapper';
import MuxingInformationAudioTrack from './MuxingInformationAudioTrack';
import MuxingInformationVideoTrack from './MuxingInformationVideoTrack';
import ProgressiveMuxingInformation from './ProgressiveMuxingInformation';

/**
 * @export
 * @class ProgressiveMovMuxingInformation
 */
export class ProgressiveMovMuxingInformation extends ProgressiveMuxingInformation {
  constructor(obj: any) {
    super(obj);
  }

}

export default ProgressiveMovMuxingInformation;

