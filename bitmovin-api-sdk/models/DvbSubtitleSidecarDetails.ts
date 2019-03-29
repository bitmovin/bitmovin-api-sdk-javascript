import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import InputStream from './InputStream';
import Output from './Output';

/**
 * @export
 * @class DvbSubtitleSidecarDetails
 */
export default class DvbSubtitleSidecarDetails extends BitmovinResource {
  constructor(obj: any) {
    super(obj);
    this.inputStream = map<InputStream>(obj.inputStream, InputStream);
    this.outputs = map<Output>(obj.outputs, Output);
    this.imageFileNaming = map(obj.imageFileNaming);
    this.indexFilename = map(obj.indexFilename);
    this.imageFormat = map(obj.imageFormat);
    this.outputFormat = map(obj.outputFormat);
  }

  /**
   * The input stream to extract the subtitle from
   * @type {InputStream}
   * @memberof DvbSubtitleSidecarDetails
   */
  public inputStream: InputStream;
  /**
   * The output where the extracted subtitle should be written to
   * @type {Array<Output>}
   * @memberof DvbSubtitleSidecarDetails
   */
  public outputs?: Array<Output>;
  /**
   * Naming strategy for the image files
   * @type {string}
   * @memberof DvbSubtitleSidecarDetails
   */
  public imageFileNaming?: string;
  /**
   * Name of the index file
   * @type {string}
   * @memberof DvbSubtitleSidecarDetails
   */
  public indexFilename?: string;
  /**
   * Specify the format of the generated images
   * @type {string}
   * @memberof DvbSubtitleSidecarDetails
   */
  public imageFormat?: string;
  /**
   * @type {string}
   * @memberof DvbSubtitleSidecarDetails
   */
  public outputFormat?: string;
}
