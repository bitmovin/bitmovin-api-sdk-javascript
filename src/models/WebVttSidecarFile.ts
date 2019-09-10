import {map, mapArray} from '../common/Mapper';
import EncodingOutput from './EncodingOutput';
import SidecarErrorMode from './SidecarErrorMode';
import SidecarFile from './SidecarFile';
import WebVttSidecarFileSegmentation from './WebVttSidecarFileSegmentation';

/**
 * An external WebVTT file that is added to an encoding. The size limit for a sidecar file is 10 MB
 * @export
 * @class WebVttSidecarFile
 */
export class WebVttSidecarFile extends SidecarFile {
  /**
   * @type {WebVttSidecarFileSegmentation}
   * @memberof WebVttSidecarFile
   */
  public segmentation?: WebVttSidecarFileSegmentation;

  constructor(obj?: Partial<WebVttSidecarFile>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.segmentation = map(obj.segmentation, WebVttSidecarFileSegmentation);
  }
}

export default WebVttSidecarFile;

