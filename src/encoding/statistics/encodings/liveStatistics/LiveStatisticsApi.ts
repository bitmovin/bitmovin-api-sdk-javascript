import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import EventsApi from './events/EventsApi';
import StreamsApi from './streams/StreamsApi';
import SrtApi from './srt/SrtApi';
import LiveEncodingStats from '../../../../models/LiveEncodingStats';

/**
 * LiveStatisticsApi - object-oriented interface
 * @export
 * @class LiveStatisticsApi
 * @extends {BaseAPI}
 */
export default class LiveStatisticsApi extends BaseAPI {
  public events: EventsApi;
  public streams: StreamsApi;
  public srt: SrtApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.events = new EventsApi(configuration);
    this.streams = new StreamsApi(configuration);
    this.srt = new SrtApi(configuration);
  }

  /**
   * @summary List Live Statistics from an Encoding
   * @param {string} encodingId Id of the encoding.
   * @throws {RequiredError}
   * @memberof LiveStatisticsApi
   */
  public get(encodingId: string): Promise<LiveEncodingStats> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.get<LiveEncodingStats>('/encoding/statistics/encodings/{encoding_id}/live-statistics', pathParamMap).then((response) => {
      return new LiveEncodingStats(response);
    });
  }
}
