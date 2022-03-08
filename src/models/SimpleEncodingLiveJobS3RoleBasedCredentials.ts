import {map, mapArray} from '../common/Mapper';
import SimpleEncodingLiveJobCredentials from './SimpleEncodingLiveJobCredentials';

/**
 * @export
 * @class SimpleEncodingLiveJobS3RoleBasedCredentials
 */
export class SimpleEncodingLiveJobS3RoleBasedCredentials extends SimpleEncodingLiveJobCredentials {
  /**
   * Amazon ARN of the IAM Role (Identity and Access Management Role) that will be assumed for S3 access. More details can be found [here](https://bitmovin.com/docs/encoding/api-reference/sections/inputs#/Encoding/PostEncodingInputsS3RoleBased) (required)
   * @type {string}
   * @memberof SimpleEncodingLiveJobS3RoleBasedCredentials
   */
  public roleArn?: string;

  /**
   * Defines if the organization ID has to be used as externalId when assuming the role. More details can be found [here](https://bitmovin.com/docs/encoding/api-reference/sections/inputs#/Encoding/PostEncodingInputsS3RoleBased)
   * @type {boolean}
   * @memberof SimpleEncodingLiveJobS3RoleBasedCredentials
   */
  public useExternalId?: boolean;

  constructor(obj?: Partial<SimpleEncodingLiveJobS3RoleBasedCredentials>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.roleArn = map(obj.roleArn);
    this.useExternalId = map(obj.useExternalId);
  }
}

export default SimpleEncodingLiveJobS3RoleBasedCredentials;

