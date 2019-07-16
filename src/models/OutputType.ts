/**
 * @export
 * @enum {string}
 */
export enum OutputType {
  AKAMAI_NETSTORAGE = 'AKAMAI_NETSTORAGE',
  AZURE = 'AZURE',
  GENERIC_S3 = 'GENERIC_S3',
  GCS = 'GCS',
  FTP = 'FTP',
  LOCAL = 'LOCAL',
  S3 = 'S3',
  S3_ROLE_BASED = 'S3_ROLE_BASED',
  SFTP = 'SFTP',
  AKAMAI_MSL = 'AKAMAI_MSL',
  LIVE_MEDIA_INGEST = 'LIVE_MEDIA_INGEST'
}

export default OutputType;

