import SimpleEncodingVodJobOutput from './SimpleEncodingVodJobOutput';
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

  constructor(obj?: Partial<SimpleEncodingVodJobCdnOutput>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default SimpleEncodingVodJobCdnOutput;

