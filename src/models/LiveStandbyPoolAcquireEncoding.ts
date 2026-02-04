import {map, mapArray} from '../common/Mapper';
import LiveStandbyPoolEncodingIngestPoint from './LiveStandbyPoolEncodingIngestPoint';

/**
 * @export
 * @class LiveStandbyPoolAcquireEncoding
 */
export class LiveStandbyPoolAcquireEncoding {
  /**
   * Note: This is not implemented yet and will be ignored if provided. List of ingest points to be used for the acquired encoding. The DNS hostname and RTMPs application name and streamKey will be assigned to the encoding. 
   * @type {LiveStandbyPoolEncodingIngestPoint[]}
   * @memberof LiveStandbyPoolAcquireEncoding
   */
  public ingestPoints?: LiveStandbyPoolEncodingIngestPoint[];

  constructor(obj?: Partial<LiveStandbyPoolAcquireEncoding>) {
    if(!obj) {
      return;
    }
    this.ingestPoints = mapArray(obj.ingestPoints, LiveStandbyPoolEncodingIngestPoint);
  }
}

export default LiveStandbyPoolAcquireEncoding;

