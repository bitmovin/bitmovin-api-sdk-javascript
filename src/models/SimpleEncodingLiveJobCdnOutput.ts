import SimpleEncodingLiveJobOutput from './SimpleEncodingLiveJobOutput';
import SimpleEncodingLiveJobOutputType from './SimpleEncodingLiveJobOutputType';
import SimpleEncodingLiveMaxResolution from './SimpleEncodingLiveMaxResolution';

/**
 * @export
 * @class SimpleEncodingLiveJobCdnOutput
 */
export class SimpleEncodingLiveJobCdnOutput extends SimpleEncodingLiveJobOutput {
  /**
   * Discriminator property for SimpleEncodingLiveJobOutput
   * @type {string}
   * @memberof SimpleEncodingLiveJobCdnOutput
   */
  public readonly type: SimpleEncodingLiveJobOutputType = SimpleEncodingLiveJobOutputType.CDN;

  constructor(obj?: Partial<SimpleEncodingLiveJobCdnOutput>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default SimpleEncodingLiveJobCdnOutput;

