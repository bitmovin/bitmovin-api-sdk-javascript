import StandardMediaInfo from './StandardMediaInfo';

/**
 * @export
 * @class VideoMediaInfo
 */
export class VideoMediaInfo extends StandardMediaInfo {
  constructor(obj?: Partial<VideoMediaInfo>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default VideoMediaInfo;

