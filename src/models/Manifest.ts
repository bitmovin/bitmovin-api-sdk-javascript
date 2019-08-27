import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import EncodingOutput from './EncodingOutput';
import ManifestType from './ManifestType';

/**
 * @export
 * @class Manifest
 */
export class Manifest extends BitmovinResource {
  /**
   * @type {ManifestType}
   * @memberof Manifest
   */
  public type?: ManifestType;

  /**
   * The outputs to store the manifest (required)
   * @type {EncodingOutput[]}
   * @memberof Manifest
   */
  public outputs?: EncodingOutput[];

  constructor(obj: Partial<Manifest>) {
    super(obj);

    this.type = obj.type;
    this.outputs = map<EncodingOutput>(obj.outputs, EncodingOutput) || [];
  }
}

export default Manifest;

