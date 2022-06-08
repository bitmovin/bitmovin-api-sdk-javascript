import SimpleEncodingVodJobInputSourceType from './SimpleEncodingVodJobInputSourceType';
import SimpleEncodingVodJobUrlInput from './SimpleEncodingVodJobUrlInput';

export type SimpleEncodingVodJobInputUnion =
  SimpleEncodingVodJobUrlInput;

/**
 * @export
 * @class SimpleEncodingVodJobInput
 */
export class SimpleEncodingVodJobInput {
  protected static readonly _discriminatorName = 'type';
  protected static readonly _discriminatorMapping: { [key in keyof typeof SimpleEncodingVodJobInputSourceType]: string; } = {
    URL: 'SimpleEncodingVodJobUrlInput'
  };

  constructor(obj?: Partial<SimpleEncodingVodJobInput>) {
    if(!obj) {
      return;
    }
  }
}

export default SimpleEncodingVodJobInput;

