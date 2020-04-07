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
  GENERIC_S3 = 'GENERIC_S3',
  GCS = 'GCS',
  HTTP = 'HTTP',
  HTTPS = 'HTTPS',
  LOCAL = 'LOCAL',
  RTMP = 'RTMP',
  S3 = 'S3',
  S3_ROLE_BASED = 'S3_ROLE_BASED',
  SFTP = 'SFTP',
  TCP = 'TCP',
  UDP = 'UDP',
  UDP_MULTICAST = 'UDP_MULTICAST',
  ZIXI = 'ZIXI',
  SRT = 'SRT',
  GCS_SERVICE_ACCOUNT = 'GCS_SERVICE_ACCOUNT'
}

export default InputType;

