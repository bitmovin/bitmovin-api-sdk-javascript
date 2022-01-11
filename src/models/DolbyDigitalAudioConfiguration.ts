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
  public readonly type: CodecConfigType = CodecConfigType.DD;

  /**
   * BitstreamInfo defines metadata parameters contained in the Dolby Digital audio bitstream
   * @type {DolbyDigitalBitstreamInfo}
   * @memberof DolbyDigitalAudioConfiguration
   */
  public bitstreamInfo?: DolbyDigitalBitstreamInfo;

  /**
   * Channel layout of the audio codec configuration.
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

