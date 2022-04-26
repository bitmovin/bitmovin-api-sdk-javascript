import {map, mapArray} from '../common/Mapper';
import SimpleEncodingLiveJobCdnOutput from './SimpleEncodingLiveJobCdnOutput';
import SimpleEncodingLiveJobOutputType from './SimpleEncodingLiveJobOutputType';
import SimpleEncodingLiveJobUrlOutput from './SimpleEncodingLiveJobUrlOutput';
import SimpleEncodingLiveMaxResolution from './SimpleEncodingLiveMaxResolution';

export type SimpleEncodingLiveJobOutputUnion =
  SimpleEncodingLiveJobUrlOutput |
  SimpleEncodingLiveJobCdnOutput;

/**
 * @export
 * @class SimpleEncodingLiveJobOutput
 */
export class SimpleEncodingLiveJobOutput {
  protected static readonly _discriminatorName = 'type';
  protected static readonly _discriminatorMapping: { [key in keyof typeof SimpleEncodingLiveJobOutputType]: string; } = {
    URL: 'SimpleEncodingLiveJobUrlOutput',
    CDN: 'SimpleEncodingLiveJobCdnOutput'
  };

  /**
   * This sets the maximum output resolution that will be generated.
   * @type {SimpleEncodingLiveMaxResolution}
   * @memberof SimpleEncodingLiveJobOutput
   */
  public maxResolution?: SimpleEncodingLiveMaxResolution;

  constructor(obj?: Partial<SimpleEncodingLiveJobOutput>) {
    if(!obj) {
      return;
    }
    this.maxResolution = map(obj.maxResolution);
  }
}

export default SimpleEncodingLiveJobOutput;

