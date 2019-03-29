import {map} from '../common/Mapper';
import MuxingInformationAudioTrack from './MuxingInformationAudioTrack';
import MuxingInformationVideoTrack from './MuxingInformationVideoTrack';
import ProgressiveMuxingInformation from './ProgressiveMuxingInformation';

/**
 * @export
 * @class Mp3MuxingInformation
 */
export default class Mp3MuxingInformation extends ProgressiveMuxingInformation {
  constructor(obj: any) {
    super(obj);
  }

}
