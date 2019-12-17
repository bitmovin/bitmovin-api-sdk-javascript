import {map, mapArray} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import InsertableContentInput from './InsertableContentInput';
import InsertableContentStatus from './InsertableContentStatus';

/**
 * @export
 * @class InsertableContent
 */
export class InsertableContent extends BitmovinResource {
  /**
   * Either a list of video files to be inserted in the live stream which have to match the codec, aspect ratio and frame rate of the live stream or a single image file. Supported image formats are: `.Y.U.V`, `Alias PIX`, `animated GIF`, `APNG`, `BMP`, `DPX`, `FITS`, `JPEG`, `JPEG 2000`, `JPEG-LS`, `PAM`, `PBM`, `PCX`, `PGM`, `PGMYUV`, `PNG`, `PPM`, `SGI`, `Sun Rasterfile`, `TIFF`, `Truevision Targa`, `WebP`, `XBM`, `XFace`, `XPM`, `XWD`
   * @type {InsertableContentInput[]}
   * @memberof InsertableContent
   */
  public inputs?: InsertableContentInput[];

  /**
   * Status of the insertable content.
   * @type {InsertableContentStatus}
   * @memberof InsertableContent
   */
  public status?: InsertableContentStatus;

  constructor(obj?: Partial<InsertableContent>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.inputs = mapArray(obj.inputs, InsertableContentInput);
    this.status = map(obj.status);
  }
}

export default InsertableContent;

