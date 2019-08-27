import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import EncodingOutput from './EncodingOutput';
import SidecarErrorMode from './SidecarErrorMode';

/**
 * A file that is added to an encoding. The size limit for a sidecar file is 10 MB
 * @export
 * @class SidecarFile
 */
export class SidecarFile extends BitmovinResource {
  /**
   * Id of input (required)
   * @type {string}
   * @memberof SidecarFile
   */
  public inputId?: string;

  /**
   * Path to sidecar file (required)
   * @type {string}
   * @memberof SidecarFile
   */
  public inputPath?: string;

  /**
   * @type {EncodingOutput[]}
   * @memberof SidecarFile
   */
  public outputs?: EncodingOutput[];

  /**
   * @type {SidecarErrorMode}
   * @memberof SidecarFile
   */
  public errorMode?: SidecarErrorMode;

  constructor(obj: Partial<SidecarFile>) {
    super(obj);

    this.inputId = obj.inputId;
    this.inputPath = obj.inputPath;
    this.outputs = map<EncodingOutput>(obj.outputs, EncodingOutput) || [];
    this.errorMode = obj.errorMode;
  }
}

export default SidecarFile;

