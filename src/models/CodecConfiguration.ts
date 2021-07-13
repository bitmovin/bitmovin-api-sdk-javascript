import AacAudioConfiguration from './AacAudioConfiguration';
import Ac3AudioConfiguration from './Ac3AudioConfiguration';
import Av1VideoConfiguration from './Av1VideoConfiguration';
import BitmovinResource from './BitmovinResource';
import CodecConfigType from './CodecConfigType';
import DolbyAtmosAudioConfiguration from './DolbyAtmosAudioConfiguration';
import DolbyDigitalAudioConfiguration from './DolbyDigitalAudioConfiguration';
import DolbyDigitalPlusAudioConfiguration from './DolbyDigitalPlusAudioConfiguration';
import DtsPassthroughAudioConfiguration from './DtsPassthroughAudioConfiguration';
import DvbSubtitleConfiguration from './DvbSubtitleConfiguration';
import Eac3AudioConfiguration from './Eac3AudioConfiguration';
import H262VideoConfiguration from './H262VideoConfiguration';
import H264VideoConfiguration from './H264VideoConfiguration';
import H265VideoConfiguration from './H265VideoConfiguration';
import HeAacV1AudioConfiguration from './HeAacV1AudioConfiguration';
import HeAacV2AudioConfiguration from './HeAacV2AudioConfiguration';
import ImscConfiguration from './ImscConfiguration';
import MjpegVideoConfiguration from './MjpegVideoConfiguration';
import Mp2AudioConfiguration from './Mp2AudioConfiguration';
import Mp3AudioConfiguration from './Mp3AudioConfiguration';
import OpusAudioConfiguration from './OpusAudioConfiguration';
import PcmAudioConfiguration from './PcmAudioConfiguration';
import VorbisAudioConfiguration from './VorbisAudioConfiguration';
import Vp8VideoConfiguration from './Vp8VideoConfiguration';
import Vp9VideoConfiguration from './Vp9VideoConfiguration';
import WebVttConfiguration from './WebVttConfiguration';

export type CodecConfigurationUnion =
  AacAudioConfiguration |
  DtsPassthroughAudioConfiguration |
  DvbSubtitleConfiguration |
  HeAacV1AudioConfiguration |
  HeAacV2AudioConfiguration |
  H264VideoConfiguration |
  H265VideoConfiguration |
  Vp9VideoConfiguration |
  Vp8VideoConfiguration |
  Mp2AudioConfiguration |
  Mp3AudioConfiguration |
  Ac3AudioConfiguration |
  DolbyDigitalAudioConfiguration |
  Eac3AudioConfiguration |
  DolbyDigitalPlusAudioConfiguration |
  OpusAudioConfiguration |
  VorbisAudioConfiguration |
  MjpegVideoConfiguration |
  Av1VideoConfiguration |
  DolbyAtmosAudioConfiguration |
  H262VideoConfiguration |
  PcmAudioConfiguration |
  WebVttConfiguration |
  ImscConfiguration;

/**
 * @export
 * @class CodecConfiguration
 */
export class CodecConfiguration extends BitmovinResource {
  protected static readonly _discriminatorName = 'type';
  protected static readonly _discriminatorMapping: { [key in keyof typeof CodecConfigType]: string; } = {
    AAC: 'AacAudioConfiguration',
    DTS_PASSTHROUGH: 'DtsPassthroughAudioConfiguration',
    DVB_SUBTITLE: 'DvbSubtitleConfiguration',
    HE_AAC_V1: 'HeAacV1AudioConfiguration',
    HE_AAC_V2: 'HeAacV2AudioConfiguration',
    H264: 'H264VideoConfiguration',
    H265: 'H265VideoConfiguration',
    VP9: 'Vp9VideoConfiguration',
    VP8: 'Vp8VideoConfiguration',
    MP2: 'Mp2AudioConfiguration',
    MP3: 'Mp3AudioConfiguration',
    AC3: 'Ac3AudioConfiguration',
    DD: 'DolbyDigitalAudioConfiguration',
    EAC3: 'Eac3AudioConfiguration',
    DDPLUS: 'DolbyDigitalPlusAudioConfiguration',
    OPUS: 'OpusAudioConfiguration',
    VORBIS: 'VorbisAudioConfiguration',
    MJPEG: 'MjpegVideoConfiguration',
    AV1: 'Av1VideoConfiguration',
    DOLBY_ATMOS: 'DolbyAtmosAudioConfiguration',
    H262: 'H262VideoConfiguration',
    PCM: 'PcmAudioConfiguration',
    WEBVTT: 'WebVttConfiguration',
    IMSC: 'ImscConfiguration'
  };

  constructor(obj?: Partial<CodecConfiguration>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default CodecConfiguration;

