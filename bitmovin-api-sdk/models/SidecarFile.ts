import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import EncodingOutput from './EncodingOutput';
import SidecarErrorMode from './SidecarErrorMode';

/**
 * A file that is added to an encoding. The size limit for a sidecar file is 10 MB
 * @export
 * @class SidecarFile
 */
export default class SidecarFile extends BitmovinResource {
  constructor(obj: any) {
    super(obj);
    this.inputId = map(obj.inputId);
    this.inputPath = map(obj.inputPath);
    this.outputs = map<EncodingOutput>(obj.outputs, EncodingOutput);
    this.errorMode = map(obj.errorMode);
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
  /**
   * @type {SidecarErrorMode}
   * @memberof SidecarFile
   */
  public errorMode?: SidecarErrorMode;
}
