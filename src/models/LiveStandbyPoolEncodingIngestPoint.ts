import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class LiveStandbyPoolEncodingIngestPoint
 */
export class LiveStandbyPoolEncodingIngestPoint {
  /**
   * URL to the RTMP/RTMPS endpoint for this live encoding
   * @type {string}
   * @memberof LiveStandbyPoolEncodingIngestPoint
   */
  public streamBaseUrl?: string;

  /**
   * Stream key value of this live encoding
   * @type {string}
   * @memberof LiveStandbyPoolEncodingIngestPoint
   */
  public streamKey?: string;

  constructor(obj?: Partial<LiveStandbyPoolEncodingIngestPoint>) {
    if(!obj) {
      return;
    }
    this.streamBaseUrl = map(obj.streamBaseUrl);
    this.streamKey = map(obj.streamKey);
  }
}

export default LiveStandbyPoolEncodingIngestPoint;

