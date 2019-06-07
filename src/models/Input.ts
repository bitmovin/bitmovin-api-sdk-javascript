import {map} from '../common/Mapper';
import AkamaiNetStorageInput from './AkamaiNetStorageInput';
import AsperaInput from './AsperaInput';
import AzureInput from './AzureInput';
import BitmovinResource from './BitmovinResource';
import FtpInput from './FtpInput';
import GcsInput from './GcsInput';
import GenericS3Input from './GenericS3Input';
import HttpInput from './HttpInput';
import HttpsInput from './HttpsInput';
import LocalInput from './LocalInput';
import RedundantRtmpInput from './RedundantRtmpInput';
import RtmpInput from './RtmpInput';
import S3Input from './S3Input';
import S3RoleBasedInput from './S3RoleBasedInput';
import SftpInput from './SftpInput';
import SrtInput from './SrtInput';
import TcpInput from './TcpInput';
import UdpInput from './UdpInput';
import UdpMulticastInput from './UdpMulticastInput';
import ZixiInput from './ZixiInput';

/**
 * @export
 * @class Input
 */
export class Input extends BitmovinResource {
  constructor(obj: any) {
    super(obj);
  }

}

export default Input;

