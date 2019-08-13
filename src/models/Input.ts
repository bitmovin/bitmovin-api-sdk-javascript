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

  protected static readonly typeMap: any = {
    'AKAMAI_NETSTORAGE': 'AkamaiNetStorageInput',
    'ASPERA': 'AsperaInput',
    'AZURE': 'AzureInput',
    'REDUNDANT_RTMP': 'RedundantRtmpInput',
    'FTP': 'FtpInput',
    'GENERIC_S3': 'GenericS3Input',
    'GCS': 'GcsInput',
    'HTTP': 'HttpInput',
    'HTTPS': 'HttpsInput',
    'LOCAL': 'LocalInput',
    'RTMP': 'RtmpInput',
    'S3': 'S3Input',
    'S3_ROLE_BASED': 'S3RoleBasedInput',
    'SFTP': 'SftpInput',
    'TCP': 'TcpInput',
    'UDP': 'UdpInput',
    'UDP_MULTICAST': 'UdpMulticastInput',
    'ZIXI': 'ZixiInput',
    'SRT': 'SrtInput'
  };

  constructor(obj: Partial<Input>) {
    super(obj);
  }
}

export default Input;

