import {map, mapArray} from '../common/Mapper';
import AudioConfiguration from './AudioConfiguration';
import CodecConfigType from './CodecConfigType';
import DolbyDigitalBitstreamInfo from './DolbyDigitalBitstreamInfo';
import DolbyDigitalChannelLayout from './DolbyDigitalChannelLayout';
import DolbyDigitalDownmixing from './DolbyDigitalDownmixing';
import DolbyDigitalEvolutionFrameworkControl from './DolbyDigitalEvolutionFrameworkControl';
import DolbyDigitalLoudnessControl from './DolbyDigitalLoudnessControl';
import DolbyDigitalPreprocessing from './DolbyDigitalPreprocessing';

/**
 * @export
 * @class DolbyDigitalAudioConfiguration
 */
export class DolbyDigitalAudioConfiguration extends AudioConfiguration {
  /**
   * Discriminator property for CodecConfiguration
   * @type {string}
   * @memberof DolbyDigitalAudioConfiguration
   */
  public type: CodecConfigType.DD = CodecConfigType.DD;

  /**
   * BitstreamInfo defines metadata parameters contained in the Dolby Digital audio bitstream
   * @type {DolbyDigitalBitstreamInfo}
   * @memberof DolbyDigitalAudioConfiguration
   */
  public bitstreamInfo?: DolbyDigitalBitstreamInfo;

  /**
   * Channel layout of the audio codec configuration. <table> <tr><th colspan=2 align=\"left\"> Available values: </th></tr> <tr><td> NONE </td><td> No channel layout </td></tr> <tr><td> MONO </td><td> Channel layout Mono </td></tr> <tr><td> STEREO </td><td> Channel layout Stereo </td></tr> <tr><td> SURROUND </td><td> Channel layout 3.0 (3 front (left + center + right), no LFE) </td></tr> <tr><td> 3.1 </td><td> Channel layout 3.1 (3 front (left + center + right), LFE) </td></tr> <tr><td> BACK_SURROUND </td><td> Channel layout Surround (2 front (left + right), 1 back center, no LFE) </td></tr> <tr><td> BACK_SURROUND_LFE </td><td> Channel layout Surround with LFE (2 front (left + right), 1 back center, LFE) </td></tr> <tr><td> QUAD </td><td> Channel layout Quad (2 front (left + right), 2 back (left + right), no LFE) </td></tr> <tr><td> QUAD_LFE </td><td> Channel layout Quad with LFE (2 front (left + right), 2 back (left + right), LFE) </td></tr> <tr><td> 4.0 </td><td> Channel layout 4.0 (3 front (left + center + right), 1 back center, no LFE) </td></tr> <tr><td> 4.1 </td><td> Channel layout 4.1 (3 front (left + center + right), 1 back center, LFE) </td></tr> <tr><td> 5.0 </td><td> Channel layout 5.0 (3 front (left + center + right), 2 side (left + right), no LFE) </td></tr> <tr><td> 5.1 </td><td> Channel layout 5.1 (3 front (left + center + right), 2 side (left + right), LFE) </td></tr> </table> 
   * @type {DolbyDigitalChannelLayout}
   * @memberof DolbyDigitalAudioConfiguration
   */
  public channelLayout?: DolbyDigitalChannelLayout;

  /**
   * @type {DolbyDigitalDownmixing}
   * @memberof DolbyDigitalAudioConfiguration
   */
  public downmixing?: DolbyDigitalDownmixing;

  /**
   * It provides a framework for signaling new evolution framework applications, such as Intelligent Loudness, in each Dolby codec. 
   * @type {DolbyDigitalEvolutionFrameworkControl}
   * @memberof DolbyDigitalAudioConfiguration
   */
  public evolutionFrameworkControl?: DolbyDigitalEvolutionFrameworkControl;

  /**
   * Settings for loudness control (required)
   * @type {DolbyDigitalLoudnessControl}
   * @memberof DolbyDigitalAudioConfiguration
   */
  public loudnessControl?: DolbyDigitalLoudnessControl;

  /**
   * @type {DolbyDigitalPreprocessing}
   * @memberof DolbyDigitalAudioConfiguration
   */
  public preprocessing?: DolbyDigitalPreprocessing;

  constructor(obj?: Partial<DolbyDigitalAudioConfiguration>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.bitstreamInfo = map(obj.bitstreamInfo, DolbyDigitalBitstreamInfo);
    this.channelLayout = map(obj.channelLayout);
    this.downmixing = map(obj.downmixing, DolbyDigitalDownmixing);
    this.evolutionFrameworkControl = map(obj.evolutionFrameworkControl);
    this.loudnessControl = map(obj.loudnessControl, DolbyDigitalLoudnessControl);
    this.preprocessing = map(obj.preprocessing, DolbyDigitalPreprocessing);
  }
}

export default DolbyDigitalAudioConfiguration;

