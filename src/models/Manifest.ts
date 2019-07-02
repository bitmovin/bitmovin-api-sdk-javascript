import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import EncodingOutput from './EncodingOutput';
import ManifestType from './ManifestType';

/**
 * @export
 * @class Manifest
 */
export class Manifest extends BitmovinResource {
  constructor(obj: any) {
    super(obj);
    this.type = map(obj.type);
    this.outputs = map<EncodingOutput>(obj.outputs, EncodingOutput);
  }

  /**
   * @type {ManifestType}
   * @memberof Manifest
   */
  public type?: ManifestType;
  /**
   * The outputs to store the manifest (required)
   * @type {Array<EncodingOutput>}
   * @memberof Manifest
   */
  public outputs: Array<EncodingOutput>;
}

export default Manifest;

