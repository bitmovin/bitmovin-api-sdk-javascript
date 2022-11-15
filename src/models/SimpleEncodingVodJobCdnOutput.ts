import {map, mapArray} from '../common/Mapper';
import SimpleEncodingLiveMaxResolution from './SimpleEncodingLiveMaxResolution';
import SimpleEncodingVodJobOutput from './SimpleEncodingVodJobOutput';
import SimpleEncodingVodJobOutputArtifact from './SimpleEncodingVodJobOutputArtifact';
import SimpleEncodingVodJobOutputType from './SimpleEncodingVodJobOutputType';

/**
 * @export
 * @class SimpleEncodingVodJobCdnOutput
 */
export class SimpleEncodingVodJobCdnOutput extends SimpleEncodingVodJobOutput {
  /**
   * Discriminator property for SimpleEncodingVodJobOutput
   * @type {string}
   * @memberof SimpleEncodingVodJobCdnOutput
   */
  public readonly type: SimpleEncodingVodJobOutputType = SimpleEncodingVodJobOutputType.CDN;

  /**
   * This sets the maximum output resolution that will be generated.
   * @type {SimpleEncodingLiveMaxResolution}
   * @memberof SimpleEncodingVodJobCdnOutput
   */
  public maxResolution?: SimpleEncodingLiveMaxResolution;

  constructor(obj?: Partial<SimpleEncodingVodJobCdnOutput>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.maxResolution = map(obj.maxResolution);
  }
}

export default SimpleEncodingVodJobCdnOutput;

