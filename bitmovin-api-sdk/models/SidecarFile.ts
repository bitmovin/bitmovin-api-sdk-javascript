import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import EncodingOutput from './EncodingOutput';

/**
 * @export
 * @class SidecarFile
 */
export default class SidecarFile extends BitmovinResource {
  constructor(obj: any) {
    super(obj);
    this.inputId = map(obj.inputId);
    this.inputPath = map(obj.inputPath);
    this.outputs = map<EncodingOutput>(obj.outputs, EncodingOutput);
  }

  /**
   * Id of input
   * @type {string}
   * @memberof SidecarFile
   */
  public inputId: string;
  /**
   * Path to sidecar file
   * @type {string}
   * @memberof SidecarFile
   */
  public inputPath: string;
  /**
   * @type {Array<EncodingOutput>}
   * @memberof SidecarFile
   */
  public outputs?: Array<EncodingOutput>;
}
