import SimpleEncodingVodJobDirectFileUploadInput from './SimpleEncodingVodJobDirectFileUploadInput';
import SimpleEncodingVodJobInputSourceType from './SimpleEncodingVodJobInputSourceType';
import SimpleEncodingVodJobUrlInput from './SimpleEncodingVodJobUrlInput';

export type SimpleEncodingVodJobInputUnion =
  SimpleEncodingVodJobUrlInput |
  SimpleEncodingVodJobDirectFileUploadInput;

/**
 * @export
 * @class SimpleEncodingVodJobInput
 */
export class SimpleEncodingVodJobInput {
  protected static readonly _discriminatorName = 'type';
  protected static readonly _discriminatorMapping: { [key in keyof typeof SimpleEncodingVodJobInputSourceType]: string; } = {
    URL: 'SimpleEncodingVodJobUrlInput',
    DIRECT_FILE_UPLOAD: 'SimpleEncodingVodJobDirectFileUploadInput'
  };

  constructor(obj?: Partial<SimpleEncodingVodJobInput>) {
    if(!obj) {
      return;
    }
  }
}

export default SimpleEncodingVodJobInput;

