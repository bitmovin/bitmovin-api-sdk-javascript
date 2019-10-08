import AudioMixInputStream from './AudioMixInputStream';
import BitmovinResource from './BitmovinResource';
import Cea608CaptionInputStream from './Cea608CaptionInputStream';
import Cea708CaptionInputStream from './Cea708CaptionInputStream';
import ConcatenationInputStream from './ConcatenationInputStream';
import DvbTeletextInputStream from './DvbTeletextInputStream';
import FileInputStream from './FileInputStream';
import H264PictureTimingTrimmingInputStream from './H264PictureTimingTrimmingInputStream';
import IngestInputStream from './IngestInputStream';
import InputStreamType from './InputStreamType';
import TimeBasedTrimmingInputStream from './TimeBasedTrimmingInputStream';
import TimecodeTrackTrimmingInputStream from './TimecodeTrackTrimmingInputStream';

export type InputStreamUnion =
  IngestInputStream |
  ConcatenationInputStream |
  TimeBasedTrimmingInputStream |
  TimecodeTrackTrimmingInputStream |
  H264PictureTimingTrimmingInputStream |
  AudioMixInputStream |
  Cea608CaptionInputStream |
  Cea708CaptionInputStream |
  FileInputStream |
  DvbTeletextInputStream;

/**
 * @export
 * @class InputStream
 */
export class InputStream extends BitmovinResource {
  protected static readonly _discriminatorName = 'type';
  protected static readonly _discriminatorMapping: { [key in keyof typeof InputStreamType]: string; } = {
    INGEST: 'IngestInputStream',
    CONCATENATION: 'ConcatenationInputStream',
    TRIMMING_TIME_BASED: 'TimeBasedTrimmingInputStream',
    TRIMMING_TIME_CODE_TRACK: 'TimecodeTrackTrimmingInputStream',
    TRIMMING_H264_PICTURE_TIMING: 'H264PictureTimingTrimmingInputStream',
    AUDIO_MIX: 'AudioMixInputStream',
    CAPTION_CEA608: 'Cea608CaptionInputStream',
    CAPTION_CEA708: 'Cea708CaptionInputStream',
    FILE: 'FileInputStream',
    DVB_TELETEXT: 'DvbTeletextInputStream'
  };

  constructor(obj?: Partial<InputStream>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default InputStream;

