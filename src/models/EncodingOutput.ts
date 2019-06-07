import {map} from '../common/Mapper';
import AclEntry from './AclEntry';

/**
 * @export
 * @class EncodingOutput
 */
export class EncodingOutput {
  constructor(obj: any) {
    this.outputId = map(obj.outputId);
    this.outputPath = map(obj.outputPath);
    this.acl = map<AclEntry>(obj.acl, AclEntry);
  }

  /**
   * Id of the corresponding output
   * @type {string}
   * @memberof EncodingOutput
   */
  public outputId: string;
  /**
   * Subdirectory where to save the files to
   * @type {string}
   * @memberof EncodingOutput
   */
  public outputPath: string;
  /**
   * @type {Array<AclEntry>}
   * @memberof EncodingOutput
   */
  public acl?: Array<AclEntry>;
}

export default EncodingOutput;

