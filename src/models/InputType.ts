/**
 * @export
 * @enum {string}
 */
export enum InputType {
  AKAMAI_NETSTORAGE = 'AKAMAI_NETSTORAGE',
  ASPERA = 'ASPERA',
  AZURE = 'AZURE',
  REDUNDANT_RTMP = 'REDUNDANT_RTMP',
  FTP = 'FTP',
  HLS = 'HLS',
  GENERIC_S3 = 'GENERIC_S3',
  GCS = 'GCS',
  HTTP = 'HTTP',
  HTTPS = 'HTTPS',
  LOCAL = 'LOCAL',
  RTMP = 'RTMP',
  S3 = 'S3',
  S3_ROLE_BASED = 'S3_ROLE_BASED',
  SFTP = 'SFTP',
  ZIXI = 'ZIXI',
  SRT = 'SRT',
  GCS_SERVICE_ACCOUNT = 'GCS_SERVICE_ACCOUNT',
  DIRECT_FILE_UPLOAD = 'DIRECT_FILE_UPLOAD'
}

export default InputType;

