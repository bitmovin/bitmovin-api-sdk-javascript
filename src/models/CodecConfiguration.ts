import AacAudioConfiguration from './AacAudioConfiguration';
import Ac3AudioConfiguration from './Ac3AudioConfiguration';
import Av1VideoConfiguration from './Av1VideoConfiguration';
import BitmovinResource from './BitmovinResource';
import CodecConfigType from './CodecConfigType';
import Eac3AudioConfiguration from './Eac3AudioConfiguration';
import H264VideoConfiguration from './H264VideoConfiguration';
import H265VideoConfiguration from './H265VideoConfiguration';
import HeAacV1AudioConfiguration from './HeAacV1AudioConfiguration';
import HeAacV2AudioConfiguration from './HeAacV2AudioConfiguration';
import MjpegVideoConfiguration from './MjpegVideoConfiguration';
import Mp2AudioConfiguration from './Mp2AudioConfiguration';
import Mp3AudioConfiguration from './Mp3AudioConfiguration';
import OpusAudioConfiguration from './OpusAudioConfiguration';
import VorbisAudioConfiguration from './VorbisAudioConfiguration';
import Vp8VideoConfiguration from './Vp8VideoConfiguration';
import Vp9VideoConfiguration from './Vp9VideoConfiguration';

export type CodecConfigurationUnion =
  AacAudioConfiguration |
  HeAacV1AudioConfiguration |
  HeAacV2AudioConfiguration |
  H264VideoConfiguration |
  H265VideoConfiguration |
  Vp9VideoConfiguration |
  Vp8VideoConfiguration |
  Mp2AudioConfiguration |
  Mp3AudioConfiguration |
  Ac3AudioConfiguration |
  Eac3AudioConfiguration |
  OpusAudioConfiguration |
  VorbisAudioConfiguration |
  MjpegVideoConfiguration |
  Av1VideoConfiguration;

/**
 * @export
 * @class CodecConfiguration
 */
export class CodecConfiguration extends BitmovinResource {
  protected static readonly _discriminatorName = 'type';
  protected static readonly _discriminatorMapping: { [key in keyof typeof CodecConfigType]: string; } = {
    AAC: 'AacAudioConfiguration',
    HE_AAC_V1: 'HeAacV1AudioConfiguration',
    HE_AAC_V2: 'HeAacV2AudioConfiguration',
    H264: 'H264VideoConfiguration',
    H265: 'H265VideoConfiguration',
    VP9: 'Vp9VideoConfiguration',
    VP8: 'Vp8VideoConfiguration',
    MP2: 'Mp2AudioConfiguration',
    MP3: 'Mp3AudioConfiguration',
    AC3: 'Ac3AudioConfiguration',
    EAC3: 'Eac3AudioConfiguration',
    OPUS: 'OpusAudioConfiguration',
    VORBIS: 'VorbisAudioConfiguration',
    MJPEG: 'MjpegVideoConfiguration',
    AV1: 'Av1VideoConfiguration'
  };

  constructor(obj?: Partial<CodecConfiguration>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default CodecConfiguration;

