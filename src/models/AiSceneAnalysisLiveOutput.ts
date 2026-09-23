import {map, mapArray} from '../common/Mapper';
import AclEntry from './AclEntry';
import Output from './Output';

/**
 * @export
 * @class AiSceneAnalysisLiveOutput
 */
export class AiSceneAnalysisLiveOutput {
  /**
   * ID of an existing Encoding Output owned by the organization. Set either this property or `output`, but not both.
   * @type {string}
   * @memberof AiSceneAnalysisLiveOutput
   */
  public outputId?: string;

  /**
   * Inline definition of a concrete, publicly creatable Encoding Output to create synchronously. Only properties defined by the selected concrete Output type are accepted; internal types and properties are not supported. Deprecated properties that remain supported by the Encoding Output creation API are accepted. Set either this property or `outputId`, but not both. Put ACL entries on the destination-level `acl` property, not in this resource definition. The created Output is an ordinary reusable Encoding resource and is not automatically deleted with the Live Analysis or after provisioning failure.
   * @type {Output}
   * @memberof AiSceneAnalysisLiveOutput
   */
  public output?: Output;

  /**
   * Subdirectory where files are written. This destination setting is not part of the inline Output resource definition. (required)
   * @type {string}
   * @memberof AiSceneAnalysisLiveOutput
   */
  public outputPath?: string;

  /**
   * Determines accessibility of files written to this destination. Only applies to Output types that support ACLs. Defaults to PUBLIC_READ if the list is empty.
   * @type {AclEntry[]}
   * @memberof AiSceneAnalysisLiveOutput
   */
  public acl?: AclEntry[];

  constructor(obj?: Partial<AiSceneAnalysisLiveOutput>) {
    if(!obj) {
      return;
    }
    this.outputId = map(obj.outputId);
    this.output = map(obj.output, Output);
    this.outputPath = map(obj.outputPath);
    this.acl = mapArray(obj.acl, AclEntry);
  }
}

export default AiSceneAnalysisLiveOutput;

