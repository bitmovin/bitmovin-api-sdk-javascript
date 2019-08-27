import {map} from '../common/Mapper';
import AclEntry from './AclEntry';

/**
 * @export
 * @class EncodingOutput
 */
export class EncodingOutput {
  /**
   * Id of the corresponding output (required)
   * @type {string}
   * @memberof EncodingOutput
   */
  public outputId?: string;

  /**
   * Subdirectory where to save the files to (required)
   * @type {string}
   * @memberof EncodingOutput
   */
  public outputPath?: string;

  /**
   * @type {AclEntry[]}
   * @memberof EncodingOutput
   */
  public acl?: AclEntry[];

  constructor(obj: Partial<EncodingOutput>) {

    this.outputId = obj.outputId;
    this.outputPath = obj.outputPath;
    this.acl = map<AclEntry>(obj.acl, AclEntry) || [];
  }
}

export default EncodingOutput;

