import {map, mapArray} from '../common/Mapper';
import AclEntry from './AclEntry';
import AnalyticsAzureOutput from './AnalyticsAzureOutput';
import AnalyticsGcsServiceAccountOutput from './AnalyticsGcsServiceAccountOutput';
import AnalyticsOutputType from './AnalyticsOutputType';
import AnalyticsS3RoleBasedOutput from './AnalyticsS3RoleBasedOutput';
import BitmovinResource from './BitmovinResource';

export type AnalyticsOutputUnion =
  AnalyticsS3RoleBasedOutput |
  AnalyticsGcsServiceAccountOutput |
  AnalyticsAzureOutput;

/**
 * @export
 * @class AnalyticsOutput
 */
export class AnalyticsOutput extends BitmovinResource {
  protected static readonly _discriminatorName = 'type';
  protected static readonly _discriminatorMapping: { [key in keyof typeof AnalyticsOutputType]: string; } = {
    S3_ROLE_BASED: 'AnalyticsS3RoleBasedOutput',
    GCS_SERVICE_ACCOUNT: 'AnalyticsGcsServiceAccountOutput',
    AZURE: 'AnalyticsAzureOutput'
  };

  /**
   * @type {AclEntry[]}
   * @memberof AnalyticsOutput
   */
  public acl?: AclEntry[];

  constructor(obj?: Partial<AnalyticsOutput>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.acl = mapArray(obj.acl, AclEntry);
  }
}

export default AnalyticsOutput;

