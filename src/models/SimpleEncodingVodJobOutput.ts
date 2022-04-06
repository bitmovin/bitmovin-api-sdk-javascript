import SimpleEncodingVodJobCdnOutput from './SimpleEncodingVodJobCdnOutput';
import SimpleEncodingVodJobOutputType from './SimpleEncodingVodJobOutputType';
import SimpleEncodingVodJobUrlOutput from './SimpleEncodingVodJobUrlOutput';

export type SimpleEncodingVodJobOutputUnion =
  SimpleEncodingVodJobUrlOutput |
  SimpleEncodingVodJobCdnOutput;

/**
 * @export
 * @class SimpleEncodingVodJobOutput
 */
export class SimpleEncodingVodJobOutput {
  protected static readonly _discriminatorName = 'type';
  protected static readonly _discriminatorMapping: { [key in keyof typeof SimpleEncodingVodJobOutputType]: string; } = {
    URL: 'SimpleEncodingVodJobUrlOutput',
    CDN: 'SimpleEncodingVodJobCdnOutput'
  };

  constructor(obj?: Partial<SimpleEncodingVodJobOutput>) {
    if(!obj) {
      return;
    }
  }
}

export default SimpleEncodingVodJobOutput;

