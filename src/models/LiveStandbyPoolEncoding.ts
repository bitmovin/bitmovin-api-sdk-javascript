import {map, mapArray} from '../common/Mapper';
import LiveStandbyPoolEncodingIngestPoint from './LiveStandbyPoolEncodingIngestPoint';
import LiveStandbyPoolEncodingManifest from './LiveStandbyPoolEncodingManifest';
import LiveStandbyPoolEncodingStatus from './LiveStandbyPoolEncodingStatus';

/**
 * @export
 * @class LiveStandbyPoolEncoding
 */
export class LiveStandbyPoolEncoding {
  /**
   * @type {string}
   * @memberof LiveStandbyPoolEncoding
   */
  public id?: string;

  /**
   * @type {string}
   * @memberof LiveStandbyPoolEncoding
   */
  public createdAt?: string;

  /**
   * @type {string}
   * @memberof LiveStandbyPoolEncoding
   */
  public modifiedAt?: string;

  /**
   * ID of the encoding that ready for ingest in the standby pool
   * @type {string}
   * @memberof LiveStandbyPoolEncoding
   */
  public encodingId?: string;

  /**
   * @type {LiveStandbyPoolEncodingManifest[]}
   * @memberof LiveStandbyPoolEncoding
   */
  public manifests?: LiveStandbyPoolEncodingManifest[];

  /**
   * @type {LiveStandbyPoolEncodingIngestPoint[]}
   * @memberof LiveStandbyPoolEncoding
   */
  public ingestPoints?: LiveStandbyPoolEncodingIngestPoint[];

  /**
   * @type {LiveStandbyPoolEncodingStatus}
   * @memberof LiveStandbyPoolEncoding
   */
  public status?: LiveStandbyPoolEncodingStatus;

  constructor(obj?: Partial<LiveStandbyPoolEncoding>) {
    if(!obj) {
      return;
    }
    this.id = map(obj.id);
    this.createdAt = map(obj.createdAt);
    this.modifiedAt = map(obj.modifiedAt);
    this.encodingId = map(obj.encodingId);
    this.manifests = mapArray(obj.manifests, LiveStandbyPoolEncodingManifest);
    this.ingestPoints = mapArray(obj.ingestPoints, LiveStandbyPoolEncodingIngestPoint);
    this.status = map(obj.status);
  }
}

export default LiveStandbyPoolEncoding;

