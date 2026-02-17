import {map, mapArray} from '../common/Mapper';
import RtmpIngestPoint from './RtmpIngestPoint';

/**
 * @export
 * @class UpdateEncodingRtmpIngestPointRequest
 */
export class UpdateEncodingRtmpIngestPointRequest {
  /**
   * List of ingest points to be updated for the encoding. The RTMPs application name and streamKey will be assigned to the encoding. 
   * @type {RtmpIngestPoint[]}
   * @memberof UpdateEncodingRtmpIngestPointRequest
   */
  public ingestPoints?: RtmpIngestPoint[];

  constructor(obj?: Partial<UpdateEncodingRtmpIngestPointRequest>) {
    if(!obj) {
      return;
    }
    this.ingestPoints = mapArray(obj.ingestPoints, RtmpIngestPoint);
  }
}

export default UpdateEncodingRtmpIngestPointRequest;

