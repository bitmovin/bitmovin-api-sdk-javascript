import {map, mapArray} from '../common/Mapper';
import AudioConfiguration from './AudioConfiguration';
import CodecConfigType from './CodecConfigType';
import DolbyDigitalPlusBitstreamInfo from './DolbyDigitalPlusBitstreamInfo';
import DolbyDigitalPlusChannelLayout from './DolbyDigitalPlusChannelLayout';
import DolbyDigitalPlusDownmixing from './DolbyDigitalPlusDownmixing';
import DolbyDigitalPlusEvolutionFrameworkControl from './DolbyDigitalPlusEvolutionFrameworkControl';
import DolbyDigitalPlusLoudnessControl from './DolbyDigitalPlusLoudnessControl';
import DolbyDigitalPlusPreprocessing from './DolbyDigitalPlusPreprocessing';

/**
 * @export
 * @class DolbyDigitalPlusAudioConfiguration
 */
export class DolbyDigitalPlusAudioConfiguration extends AudioConfiguration {
  /**
   * Discriminator property for CodecConfiguration
   * @type {string}
   * @memberof DolbyDigitalPlusAudioConfiguration
   */
  public type: CodecConfigType.DDPLUS = CodecConfigType.DDPLUS;

  /**
   * BitstreamInfo defines metadata parameters contained in the Dolby Digital Plus audio bitstream
   * @type {DolbyDigitalPlusBitstreamInfo}
   * @memberof DolbyDigitalPlusAudioConfiguration
   */
  public bitstreamInfo?: DolbyDigitalPlusBitstreamInfo;

  /**
   * Channel layout of the audio codec configuration. <table> <tr><th colspan=2 align=\"left\"> Available values: </th></tr> <tr><td> NONE </td><td> No channel layout </td></tr> <tr><td> MONO </td><td> Channel layout Mono </td></tr> <tr><td> STEREO </td><td> Channel layout Stereo </td></tr> <tr><td> SURROUND </td><td> Channel layout 3.0 (3 front (left + center + right), no LFE) </td></tr> <tr><td> 3.1 </td><td> Channel layout 3.1 (3 front (left + center + right), LFE) </td></tr> <tr><td> BACK_SURROUND </td><td> Channel layout Surround (2 front (left + right), 1 back center, no LFE) </td></tr> <tr><td> BACK_SURROUND_LFE </td><td> Channel layout Surround with LFE (2 front (left + right), 1 back center, LFE) </td></tr> <tr><td> QUAD </td><td> Channel layout Quad (2 front (left + right), 2 back (left + right), no LFE) </td></tr> <tr><td> QUAD_LFE </td><td> Channel layout Quad with LFE (2 front (left + right), 2 back (left + right), LFE) </td></tr> <tr><td> 4.0 </td><td> Channel layout 4.0 (3 front (left + center + right), 1 back center, no LFE) </td></tr> <tr><td> 4.1 </td><td> Channel layout 4.1 (3 front (left + center + right), 1 back center, LFE) </td></tr> <tr><td> 5.0 </td><td> Channel layout 5.0 (3 front (left + center + right), 2 side (left + right), no LFE) </td></tr> <tr><td> 5.1 </td><td> Channel layout 5.1 (3 front (left + center + right), 2 side (left + right), LFE) </td></tr> </table> 
   * @type {DolbyDigitalPlusChannelLayout}
   * @memberof DolbyDigitalPlusAudioConfiguration
   */
  public channelLayout?: DolbyDigitalPlusChannelLayout;

  /**
   * @type {DolbyDigitalPlusDownmixing}
   * @memberof DolbyDigitalPlusAudioConfiguration
   */
  public downmixing?: DolbyDigitalPlusDownmixing;

  /**
   * It provides a framework for signaling new evolution framework applications, such as Intelligent Loudness, in each Dolby codec. 
   * @type {DolbyDigitalPlusEvolutionFrameworkControl}
   * @memberof DolbyDigitalPlusAudioConfiguration
   */
  public evolutionFrameworkControl?: DolbyDigitalPlusEvolutionFrameworkControl;

  /**
   * Settings for loudness control (required)
   * @type {DolbyDigitalPlusLoudnessControl}
   * @memberof DolbyDigitalPlusAudioConfiguration
   */
  public loudnessControl?: DolbyDigitalPlusLoudnessControl;

  /**
   * @type {DolbyDigitalPlusPreprocessing}
   * @memberof DolbyDigitalPlusAudioConfiguration
   */
  public preprocessing?: DolbyDigitalPlusPreprocessing;

  constructor(obj?: Partial<DolbyDigitalPlusAudioConfiguration>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.bitstreamInfo = map(obj.bitstreamInfo, DolbyDigitalPlusBitstreamInfo);
    this.channelLayout = map(obj.channelLayout);
    this.downmixing = map(obj.downmixing, DolbyDigitalPlusDownmixing);
    this.evolutionFrameworkControl = map(obj.evolutionFrameworkControl);
    this.loudnessControl = map(obj.loudnessControl, DolbyDigitalPlusLoudnessControl);
    this.preprocessing = map(obj.preprocessing, DolbyDigitalPlusPreprocessing);
  }
}

export default DolbyDigitalPlusAudioConfiguration;

