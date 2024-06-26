import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import AacApi from './aac/AacApi';
import DtsPassthroughApi from './dtsPassthrough/DtsPassthroughApi';
import DtsApi from './dts/DtsApi';
import DtsxApi from './dtsx/DtsxApi';
import DolbyAtmosApi from './dolbyAtmos/DolbyAtmosApi';
import HeAacV1Api from './heAacV1/HeAacV1Api';
import HeAacV2Api from './heAacV2/HeAacV2Api';
import PassthroughApi from './passthrough/PassthroughApi';
import VorbisApi from './vorbis/VorbisApi';
import OpusApi from './opus/OpusApi';
import PcmApi from './pcm/PcmApi';
import Ac3Api from './ac3/Ac3Api';
import DolbyDigitalApi from './dolbyDigital/DolbyDigitalApi';
import DolbyDigitalPlusApi from './dolbyDigitalPlus/DolbyDigitalPlusApi';
import Eac3Api from './eac3/Eac3Api';
import Mp2Api from './mp2/Mp2Api';
import Mp3Api from './mp3/Mp3Api';

/**
 * AudioApi - object-oriented interface
 * @export
 * @class AudioApi
 * @extends {BaseAPI}
 */
export default class AudioApi extends BaseAPI {
  public aac: AacApi;
  public dtsPassthrough: DtsPassthroughApi;
  public dts: DtsApi;
  public dtsx: DtsxApi;
  public dolbyAtmos: DolbyAtmosApi;
  public heAacV1: HeAacV1Api;
  public heAacV2: HeAacV2Api;
  public passthrough: PassthroughApi;
  public vorbis: VorbisApi;
  public opus: OpusApi;
  public pcm: PcmApi;
  public ac3: Ac3Api;
  public dolbyDigital: DolbyDigitalApi;
  public dolbyDigitalPlus: DolbyDigitalPlusApi;
  public eac3: Eac3Api;
  public mp2: Mp2Api;
  public mp3: Mp3Api;

  constructor(configuration: Configuration) {
    super(configuration);
    this.aac = new AacApi(configuration);
    this.dtsPassthrough = new DtsPassthroughApi(configuration);
    this.dts = new DtsApi(configuration);
    this.dtsx = new DtsxApi(configuration);
    this.dolbyAtmos = new DolbyAtmosApi(configuration);
    this.heAacV1 = new HeAacV1Api(configuration);
    this.heAacV2 = new HeAacV2Api(configuration);
    this.passthrough = new PassthroughApi(configuration);
    this.vorbis = new VorbisApi(configuration);
    this.opus = new OpusApi(configuration);
    this.pcm = new PcmApi(configuration);
    this.ac3 = new Ac3Api(configuration);
    this.dolbyDigital = new DolbyDigitalApi(configuration);
    this.dolbyDigitalPlus = new DolbyDigitalPlusApi(configuration);
    this.eac3 = new Eac3Api(configuration);
    this.mp2 = new Mp2Api(configuration);
    this.mp3 = new Mp3Api(configuration);
  }
}
