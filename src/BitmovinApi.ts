import {BaseAPI} from './common/BaseAPI';
import Configuration from './common/Configuration';
import {map, mapArray} from './common/Mapper';
import AccountApi from './account/AccountApi';
import AiSceneAnalysisApi from './aiSceneAnalysis/AiSceneAnalysisApi';
import AnalyticsApi from './analytics/AnalyticsApi';
import EncodingApi from './encoding/EncodingApi';
import GeneralApi from './general/GeneralApi';
import NotificationsApi from './notifications/NotificationsApi';
import PlayerApi from './player/PlayerApi';
import StreamsApi from './streams/StreamsApi';

/**
 * BitmovinApi - object-oriented interface
 * @export
 * @class BitmovinApi
 * @extends {BaseAPI}
 */
export default class BitmovinApi extends BaseAPI {
  public account: AccountApi;
  public aiSceneAnalysis: AiSceneAnalysisApi;
  public analytics: AnalyticsApi;
  public encoding: EncodingApi;
  public general: GeneralApi;
  public notifications: NotificationsApi;
  public player: PlayerApi;
  public streams: StreamsApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.account = new AccountApi(configuration);
    this.aiSceneAnalysis = new AiSceneAnalysisApi(configuration);
    this.analytics = new AnalyticsApi(configuration);
    this.encoding = new EncodingApi(configuration);
    this.general = new GeneralApi(configuration);
    this.notifications = new NotificationsApi(configuration);
    this.player = new PlayerApi(configuration);
    this.streams = new StreamsApi(configuration);
  }
}
