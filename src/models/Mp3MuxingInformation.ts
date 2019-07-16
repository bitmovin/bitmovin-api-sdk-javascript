import {map} from '../common/Mapper';
import MuxingInformationAudioTrack from './MuxingInformationAudioTrack';
import MuxingInformationVideoTrack from './MuxingInformationVideoTrack';
import ProgressiveMuxingInformation from './ProgressiveMuxingInformation';

/**
 * @export
 * @class Mp3MuxingInformation
 */
export class Mp3MuxingInformation extends ProgressiveMuxingInformation {
  constructor(obj: Partial<Mp3MuxingInformation>) {
    super(obj);
  }
}

export default Mp3MuxingInformation;

