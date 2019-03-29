import {map} from '../common/Mapper';
import AudioMixInputStream from './AudioMixInputStream';
import BitmovinResource from './BitmovinResource';
import ConcatenationInputStream from './ConcatenationInputStream';
import H264PictureTimingTrimmingInputStream from './H264PictureTimingTrimmingInputStream';
import IngestInputStream from './IngestInputStream';
import TimeBasedTrimmingInputStream from './TimeBasedTrimmingInputStream';
import TimecodeTrackTrimmingInputStream from './TimecodeTrackTrimmingInputStream';

/**
 * @export
 * @class BasicInputStream
 */
export default class BasicInputStream extends BitmovinResource {
  constructor(obj: any) {
    super(obj);
  }

}
