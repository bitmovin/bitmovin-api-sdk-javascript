import {map, mapArray} from '../common/Mapper';
import SimpleEncodingVodJobCdnOutput from './SimpleEncodingVodJobCdnOutput';
import SimpleEncodingVodJobOutputArtifact from './SimpleEncodingVodJobOutputArtifact';
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

  /**
   * List of artifacts created by the encoding job. Artifacts are files essential for playback of the generated content, e.g. manifests. 
   * @type {SimpleEncodingVodJobOutputArtifact[]}
   * @memberof SimpleEncodingVodJobOutput
   */
  public artifacts?: SimpleEncodingVodJobOutputArtifact[];

  constructor(obj?: Partial<SimpleEncodingVodJobOutput>) {
    if(!obj) {
      return;
    }
    this.artifacts = mapArray(obj.artifacts, SimpleEncodingVodJobOutputArtifact);
  }
}

export default SimpleEncodingVodJobOutput;

