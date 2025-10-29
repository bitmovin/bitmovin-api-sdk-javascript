import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class SubtaskMetadataData
 */
export class SubtaskMetadataData {
  /**
   * @type {number}
   * @memberof SubtaskMetadataData
   */
  public avgFramesEncodedPerSecond?: number;

  /**
   * @type {number}
   * @memberof SubtaskMetadataData
   */
  public bytesEncoded?: number;

  /**
   * @type {number}
   * @memberof SubtaskMetadataData
   */
  public framesAnalysed?: number;

  /**
   * @type {number}
   * @memberof SubtaskMetadataData
   */
  public framesEncoded?: number;

  /**
   * @type {number}
   * @memberof SubtaskMetadataData
   */
  public realtimeFactor?: number;

  /**
   * @type {number}
   * @memberof SubtaskMetadataData
   */
  public size?: number;

  constructor(obj?: Partial<SubtaskMetadataData>) {
    if(!obj) {
      return;
    }
    this.avgFramesEncodedPerSecond = map(obj.avgFramesEncodedPerSecond);
    this.bytesEncoded = map(obj.bytesEncoded);
    this.framesAnalysed = map(obj.framesAnalysed);
    this.framesEncoded = map(obj.framesEncoded);
    this.realtimeFactor = map(obj.realtimeFactor);
    this.size = map(obj.size);
  }
}

export default SubtaskMetadataData;

