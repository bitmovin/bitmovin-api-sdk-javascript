import {map, mapArray} from '../common/Mapper';
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
   * Determines accessibility of files written to this output. Only applies to output types that support ACLs. Defaults to PUBLIC_READ if the list is empty. The destination (e.g. cloud storage bucket) needs to allow the configured ACL
   * @type {AclEntry[]}
   * @memberof EncodingOutput
   */
  public acl?: AclEntry[];

  constructor(obj?: Partial<EncodingOutput>) {
    if(!obj) {
      return;
    }
    this.outputId = map(obj.outputId);
    this.outputPath = map(obj.outputPath);
    this.acl = mapArray(obj.acl, AclEntry);
  }
}

export default EncodingOutput;

