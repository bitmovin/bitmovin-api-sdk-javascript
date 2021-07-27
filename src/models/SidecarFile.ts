import {map, mapArray} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import EncodingOutput from './EncodingOutput';
import SidecarErrorMode from './SidecarErrorMode';
import SidecarFileType from './SidecarFileType';
import WebVttSidecarFile from './WebVttSidecarFile';

export type SidecarFileUnion =
  WebVttSidecarFile;

/**
 * A file that is added to an encoding. The size limit for a sidecar file is 10 MB
 * @export
 * @class SidecarFile
 */
export class SidecarFile extends BitmovinResource {
  protected static readonly _discriminatorName = 'type';
  protected static readonly _discriminatorMapping: { [key in keyof typeof SidecarFileType]: string; } = {
    WEB_VTT: 'WebVttSidecarFile'
  };

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
   * This defines how errors should be handled
   * @type {SidecarErrorMode}
   * @memberof SidecarFile
   */
  public errorMode?: SidecarErrorMode;

  constructor(obj?: Partial<SidecarFile>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.inputId = map(obj.inputId);
    this.inputPath = map(obj.inputPath);
    this.outputs = mapArray(obj.outputs, EncodingOutput);
    this.errorMode = map(obj.errorMode);
  }
}

export default SidecarFile;

