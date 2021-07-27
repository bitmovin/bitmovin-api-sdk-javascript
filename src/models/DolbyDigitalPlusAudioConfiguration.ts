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
   * Channel layout of the audio codec configuration.
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

