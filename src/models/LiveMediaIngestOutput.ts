import {map, mapArray} from '../common/Mapper';
import AclEntry from './AclEntry';
import Output from './Output';
import OutputType from './OutputType';

/**
 * Live Media and Metadata Ingest Protocol. See https://tools.ietf.org/html/draft-mekuria-mmediaingest-01.
 * @export
 * @class LiveMediaIngestOutput
 */
export class LiveMediaIngestOutput extends Output {
  /**
   * Discriminator property for Output
   * @type {string}
   * @memberof LiveMediaIngestOutput
   */
  public readonly type: OutputType = OutputType.LIVE_MEDIA_INGEST;

  /**
   * URL specifying the publishing point for the output. Can use either http or https. (required)
   * @type {string}
   * @memberof LiveMediaIngestOutput
   */
  public publishingPoint?: string;

  constructor(obj?: Partial<LiveMediaIngestOutput>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.publishingPoint = map(obj.publishingPoint);
  }
}

export default LiveMediaIngestOutput;

