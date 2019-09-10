import {map, mapArray} from '../common/Mapper';
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

  constructor(obj?: Partial<Manifest>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.type = map(obj.type);
    this.outputs = mapArray(obj.outputs, EncodingOutput);
  }
}

export default Manifest;

