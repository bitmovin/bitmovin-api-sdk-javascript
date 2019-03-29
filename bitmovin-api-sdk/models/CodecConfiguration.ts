import {map} from '../common/Mapper';
import AacAudioConfiguration from './AacAudioConfiguration';
import Ac3AudioConfiguration from './Ac3AudioConfiguration';
import Av1VideoConfiguration from './Av1VideoConfiguration';
import BitmovinResource from './BitmovinResource';
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

/**
 * @export
 * @class CodecConfiguration
 */
export default class CodecConfiguration extends BitmovinResource {
  constructor(obj: any) {
    super(obj);
  }

}
