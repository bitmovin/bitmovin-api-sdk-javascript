import {map} from '../common/Mapper';
import AudioMixInputStream from './AudioMixInputStream';
import BitmovinResource from './BitmovinResource';
import ConcatenationInputStream from './ConcatenationInputStream';
import FileInputStream from './FileInputStream';
import H264PictureTimingTrimmingInputStream from './H264PictureTimingTrimmingInputStream';
import IngestInputStream from './IngestInputStream';
import TimeBasedTrimmingInputStream from './TimeBasedTrimmingInputStream';
import TimecodeTrackTrimmingInputStream from './TimecodeTrackTrimmingInputStream';

/**
 * @export
 * @class InputStream
 */
export class InputStream extends BitmovinResource {
  constructor(obj: any) {
    super(obj);
  }

}

export default InputStream;

