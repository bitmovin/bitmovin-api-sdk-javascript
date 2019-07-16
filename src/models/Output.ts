import {map} from '../common/Mapper';
import AclEntry from './AclEntry';
import AkamaiMslOutput from './AkamaiMslOutput';
import AkamaiNetStorageOutput from './AkamaiNetStorageOutput';
import AzureOutput from './AzureOutput';
import BitmovinResource from './BitmovinResource';
import FtpOutput from './FtpOutput';
import GcsOutput from './GcsOutput';
import GenericS3Output from './GenericS3Output';
import LiveMediaIngestOutput from './LiveMediaIngestOutput';
import LocalOutput from './LocalOutput';
import S3Output from './S3Output';
import S3RoleBasedOutput from './S3RoleBasedOutput';
import SftpOutput from './SftpOutput';

/**
 * @export
 * @class Output
 */
export class Output extends BitmovinResource {
  /**
   * @type {AclEntry[]}
   * @memberof Output
   */
  public acl?: AclEntry[];

  constructor(obj: Partial<Output>) {
    super(obj);
    this.acl = map<AclEntry>(obj.acl, AclEntry);
  }
}

export default Output;

