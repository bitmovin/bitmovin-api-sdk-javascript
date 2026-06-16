import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class LiveEncodingHeartbeatUrlResponse
 */
export class LiveEncodingHeartbeatUrlResponse {
  /**
   * Presigned S3 URL to download the final heartbeat JSON of the live encoding. Valid for 10 minutes. (required)
   * @type {string}
   * @memberof LiveEncodingHeartbeatUrlResponse
   */
  public url?: string;

  constructor(obj?: Partial<LiveEncodingHeartbeatUrlResponse>) {
    if(!obj) {
      return;
    }
    this.url = map(obj.url);
  }
}

export default LiveEncodingHeartbeatUrlResponse;

