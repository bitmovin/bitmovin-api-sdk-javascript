import {map, mapArray} from '../common/Mapper';
import AclEntry from './AclEntry';
import AkamaiMslOutput from './AkamaiMslOutput';
import AkamaiNetStorageOutput from './AkamaiNetStorageOutput';
import AzureOutput from './AzureOutput';
import BitmovinResource from './BitmovinResource';
import CdnOutput from './CdnOutput';
import FtpOutput from './FtpOutput';
import GcsOutput from './GcsOutput';
import GcsServiceAccountOutput from './GcsServiceAccountOutput';
import GenericS3Output from './GenericS3Output';
import LiveMediaIngestOutput from './LiveMediaIngestOutput';
import LocalOutput from './LocalOutput';
import OutputType from './OutputType';
import S3Output from './S3Output';
import S3RoleBasedOutput from './S3RoleBasedOutput';
import SftpOutput from './SftpOutput';

export type OutputUnion =
  AkamaiNetStorageOutput |
  AzureOutput |
  CdnOutput |
  GenericS3Output |
  GcsOutput |
  FtpOutput |
  LocalOutput |
  S3Output |
  S3RoleBasedOutput |
  SftpOutput |
  AkamaiMslOutput |
  LiveMediaIngestOutput |
  GcsServiceAccountOutput;

/**
 * @export
 * @class Output
 */
export class Output extends BitmovinResource {
  protected static readonly _discriminatorName = 'type';
  protected static readonly _discriminatorMapping: { [key in keyof typeof OutputType]: string; } = {
    AKAMAI_NETSTORAGE: 'AkamaiNetStorageOutput',
    AZURE: 'AzureOutput',
    CDN: 'CdnOutput',
    GENERIC_S3: 'GenericS3Output',
    GCS: 'GcsOutput',
    FTP: 'FtpOutput',
    LOCAL: 'LocalOutput',
    S3: 'S3Output',
    S3_ROLE_BASED: 'S3RoleBasedOutput',
    SFTP: 'SftpOutput',
    AKAMAI_MSL: 'AkamaiMslOutput',
    LIVE_MEDIA_INGEST: 'LiveMediaIngestOutput',
    GCS_SERVICE_ACCOUNT: 'GcsServiceAccountOutput'
  };

  /**
   * @type {AclEntry[]}
   * @memberof Output
   */
  public acl?: AclEntry[];

  constructor(obj?: Partial<Output>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.acl = mapArray(obj.acl, AclEntry);
  }
}

export default Output;

