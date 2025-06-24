import AkamaiNetStorageInput from './AkamaiNetStorageInput';
import AsperaInput from './AsperaInput';
import AzureInput from './AzureInput';
import BitmovinResource from './BitmovinResource';
import DirectFileUploadInput from './DirectFileUploadInput';
import FtpInput from './FtpInput';
import GcsInput from './GcsInput';
import GcsServiceAccountInput from './GcsServiceAccountInput';
import GenericS3Input from './GenericS3Input';
import HlsInput from './HlsInput';
import HttpInput from './HttpInput';
import HttpsInput from './HttpsInput';
import InputType from './InputType';
import LocalInput from './LocalInput';
import RedundantRtmpInput from './RedundantRtmpInput';
import RtmpInput from './RtmpInput';
import S3Input from './S3Input';
import S3RoleBasedInput from './S3RoleBasedInput';
import SftpInput from './SftpInput';
import SrtInput from './SrtInput';
import ZixiInput from './ZixiInput';

export type InputUnion =
  AkamaiNetStorageInput |
  AsperaInput |
  AzureInput |
  RedundantRtmpInput |
  FtpInput |
  GenericS3Input |
  GcsInput |
  HttpInput |
  HttpsInput |
  HlsInput |
  LocalInput |
  RtmpInput |
  S3Input |
  S3RoleBasedInput |
  SftpInput |
  ZixiInput |
  SrtInput |
  GcsServiceAccountInput |
  DirectFileUploadInput;

/**
 * @export
 * @class Input
 */
export class Input extends BitmovinResource {
  protected static readonly _discriminatorName = 'type';
  protected static readonly _discriminatorMapping: { [key in keyof typeof InputType]: string; } = {
    AKAMAI_NETSTORAGE: 'AkamaiNetStorageInput',
    ASPERA: 'AsperaInput',
    AZURE: 'AzureInput',
    REDUNDANT_RTMP: 'RedundantRtmpInput',
    FTP: 'FtpInput',
    GENERIC_S3: 'GenericS3Input',
    GCS: 'GcsInput',
    HTTP: 'HttpInput',
    HTTPS: 'HttpsInput',
    HLS: 'HlsInput',
    LOCAL: 'LocalInput',
    RTMP: 'RtmpInput',
    S3: 'S3Input',
    S3_ROLE_BASED: 'S3RoleBasedInput',
    SFTP: 'SftpInput',
    ZIXI: 'ZixiInput',
    SRT: 'SrtInput',
    GCS_SERVICE_ACCOUNT: 'GcsServiceAccountInput',
    DIRECT_FILE_UPLOAD: 'DirectFileUploadInput'
  };

  constructor(obj?: Partial<Input>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default Input;

