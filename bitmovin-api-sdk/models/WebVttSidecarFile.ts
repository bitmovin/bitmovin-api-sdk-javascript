import {map} from '../common/Mapper';
import EncodingOutput from './EncodingOutput';
import SidecarErrorMode from './SidecarErrorMode';
import SidecarFile from './SidecarFile';
import WebVttSidecarFileSegmentation from './WebVttSidecarFileSegmentation';

/**
 * An external WebVTT file that is added to an encoding. The size limit for a sidecar file is 10 MB
 * @export
 * @class WebVttSidecarFile
 */
export default class WebVttSidecarFile extends SidecarFile {
  constructor(obj: any) {
    super(obj);
    this.segmentation = map<WebVttSidecarFileSegmentation>(obj.segmentation, WebVttSidecarFileSegmentation);
  }

  /**
   * @type {WebVttSidecarFileSegmentation}
   * @memberof WebVttSidecarFile
   */
  public segmentation?: WebVttSidecarFileSegmentation;
}
