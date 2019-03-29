import {map} from '../common/Mapper';
import AclEntry from './AclEntry';
import AkamaiNetStorageOutput from './AkamaiNetStorageOutput';
import AzureOutput from './AzureOutput';
import BitmovinResource from './BitmovinResource';
import FtpOutput from './FtpOutput';
import GcsOutput from './GcsOutput';
import GenericS3Output from './GenericS3Output';
import LocalOutput from './LocalOutput';
import S3Output from './S3Output';
import S3RoleBasedOutput from './S3RoleBasedOutput';
import SftpOutput from './SftpOutput';

/**
 * @export
 * @class Output
 */
export default class Output extends BitmovinResource {
  constructor(obj: any) {
    super(obj);
    this.acl = map<AclEntry>(obj.acl, AclEntry);
  }

  /**
   * @type {Array<AclEntry>}
   * @memberof Output
   */
  public acl?: Array<AclEntry>;
}
