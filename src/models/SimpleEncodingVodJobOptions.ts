import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class SimpleEncodingVodJobOptions
 */
export class SimpleEncodingVodJobOptions {
  /**
   * Defines if the job should additionally produce a single file as output (e.g., an MP4) for every rendition the Per-Title algorithm produces. This can be useful to provide customers with features such as downloading of videos for different screen sizes.  The single file contains both audio and video streams along the segmented output. Note that currently we do not include subtitles in this file. 
   * @type {boolean}
   * @memberof SimpleEncodingVodJobOptions
   */
  public singleFileOutput?: boolean;

  constructor(obj?: Partial<SimpleEncodingVodJobOptions>) {
    if(!obj) {
      return;
    }
    this.singleFileOutput = map(obj.singleFileOutput);
  }
}

export default SimpleEncodingVodJobOptions;

