import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import {map, mapArray} from '../../common/Mapper';
import LiveApi from './live/LiveApi';
import CustomdataApi from './customdata/CustomdataApi';
import StreamsApi from './streams/StreamsApi';
import InputStreamsApi from './inputStreams/InputStreamsApi';
import MuxingsApi from './muxings/MuxingsApi';
import TemplateApi from './template/TemplateApi';
import TransferRetriesApi from './transferRetries/TransferRetriesApi';
import OutputPathsApi from './outputPaths/OutputPathsApi';
import CaptionsApi from './captions/CaptionsApi';
import SidecarsApi from './sidecars/SidecarsApi';
import KantarWatermarkApi from './kantarWatermark/KantarWatermarkApi';
import KeyframesApi from './keyframes/KeyframesApi';
import Scte35TriggersApi from './scte35Triggers/Scte35TriggersApi';
import BitmovinResponse from '../../models/BitmovinResponse';
import CloudRegion from '../../models/CloudRegion';
import Encoding from '../../models/Encoding';
import EncodingMode from '../../models/EncodingMode';
import ReprioritizeEncodingRequest from '../../models/ReprioritizeEncodingRequest';
import RescheduleEncodingRequest from '../../models/RescheduleEncodingRequest';
import StartEncodingRequest from '../../models/StartEncodingRequest';
import Task from '../../models/Task';
import PaginationResponse from '../../models/PaginationResponse';
import {EncodingListQueryParams, EncodingListQueryParamsBuilder} from './EncodingListQueryParams';

/**
 * EncodingsApi - object-oriented interface
 * @export
 * @class EncodingsApi
 * @extends {BaseAPI}
 */
export default class EncodingsApi extends BaseAPI {
  public live: LiveApi;
  public customdata: CustomdataApi;
  public streams: StreamsApi;
  public inputStreams: InputStreamsApi;
  public muxings: MuxingsApi;
  public template: TemplateApi;
  public transferRetries: TransferRetriesApi;
  public outputPaths: OutputPathsApi;
  public captions: CaptionsApi;
  public sidecars: SidecarsApi;
  public kantarWatermark: KantarWatermarkApi;
  public keyframes: KeyframesApi;
  public scte35Triggers: Scte35TriggersApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.live = new LiveApi(configuration);
    this.customdata = new CustomdataApi(configuration);
    this.streams = new StreamsApi(configuration);
    this.inputStreams = new InputStreamsApi(configuration);
    this.muxings = new MuxingsApi(configuration);
    this.template = new TemplateApi(configuration);
    this.transferRetries = new TransferRetriesApi(configuration);
    this.outputPaths = new OutputPathsApi(configuration);
    this.captions = new CaptionsApi(configuration);
    this.sidecars = new SidecarsApi(configuration);
    this.kantarWatermark = new KantarWatermarkApi(configuration);
    this.keyframes = new KeyframesApi(configuration);
    this.scte35Triggers = new Scte35TriggersApi(configuration);
  }

  /**
   * @summary Create Encoding
   * @param {Encoding} encoding The Encoding to be created
   * @throws {BitmovinError}
   * @memberof EncodingsApi
   */
  public create(encoding?: Encoding): Promise<Encoding> {
    return this.restClient.post<Encoding>('/encoding/encodings', {}, encoding).then((response) => {
      return map(response, Encoding);
    });
  }

  /**
   * @summary Delete Encoding
   * @param {string} encodingId Id of the encoding.
   * @throws {BitmovinError}
   * @memberof EncodingsApi
   */
  public delete(encodingId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Encoding Details
   * @param {string} encodingId Id of the encoding.
   * @throws {BitmovinError}
   * @memberof EncodingsApi
   */
  public get(encodingId: string): Promise<Encoding> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.get<Encoding>('/encoding/encodings/{encoding_id}', pathParamMap).then((response) => {
      return map(response, Encoding);
    });
  }

  /**
   * @summary Encoding Start Details
   * @param {string} encodingId Id of the encoding
   * @throws {BitmovinError}
   * @memberof EncodingsApi
   */
  public getStartRequest(encodingId: string): Promise<StartEncodingRequest> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.get<StartEncodingRequest>('/encoding/encodings/{encoding_id}/start', pathParamMap).then((response) => {
      return map(response, StartEncodingRequest);
    });
  }

  /**
   * @summary List all Encodings
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof EncodingsApi
   */
  public list(queryParameters?: EncodingListQueryParams | ((q: EncodingListQueryParamsBuilder) => EncodingListQueryParamsBuilder)): Promise<PaginationResponse<Encoding>> {
    let queryParams: EncodingListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new EncodingListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<Encoding>>('/encoding/encodings', {}, queryParams).then((response) => {
      return new PaginationResponse<Encoding>(response, Encoding);
    });
  }

  /**
   * @summary Reprioritize Encoding
   * @param {string} encodingId Id of the encoding.
   * @param {ReprioritizeEncodingRequest} reprioritizeEncodingRequest Reprioritization options
   * @throws {BitmovinError}
   * @memberof EncodingsApi
   */
  public reprioritize(encodingId: string, reprioritizeEncodingRequest?: ReprioritizeEncodingRequest): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<BitmovinResponse>('/encoding/encodings/{encoding_id}/reprioritize', pathParamMap, reprioritizeEncodingRequest).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Reschedule Encoding
   * @param {string} encodingId Id of the encoding.
   * @param {RescheduleEncodingRequest} rescheduleEncodingRequest Rescheduling options
   * @throws {BitmovinError}
   * @memberof EncodingsApi
   */
  public reschedule(encodingId: string, rescheduleEncodingRequest?: RescheduleEncodingRequest): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<BitmovinResponse>('/encoding/encodings/{encoding_id}/reschedule', pathParamMap, rescheduleEncodingRequest).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Start VoD Encoding
   * @param {string} encodingId Id of the encoding
   * @param {StartEncodingRequest} [startEncodingRequest] Encoding Startup Options
   * @throws {BitmovinError}
   * @memberof EncodingsApi
   */
  public start(encodingId: string, startEncodingRequest?: StartEncodingRequest): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<BitmovinResponse>('/encoding/encodings/{encoding_id}/start', pathParamMap, startEncodingRequest).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Encoding Status
   * @param {string} encodingId Id of the encoding
   * @throws {BitmovinError}
   * @memberof EncodingsApi
   */
  public status(encodingId: string): Promise<Task> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.get<Task>('/encoding/encodings/{encoding_id}/status', pathParamMap).then((response) => {
      return map(response, Task);
    });
  }

  /**
   * @summary Stop Encoding
   * @param {string} encodingId Id of the encoding
   * @throws {BitmovinError}
   * @memberof EncodingsApi
   */
  public stop(encodingId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<BitmovinResponse>('/encoding/encodings/{encoding_id}/stop', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }
}
