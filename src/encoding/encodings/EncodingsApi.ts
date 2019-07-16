import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import LiveApi from './live/LiveApi';
import MachineLearningApi from './machineLearning/MachineLearningApi';
import CustomdataApi from './customdata/CustomdataApi';
import StreamsApi from './streams/StreamsApi';
import InputStreamsApi from './inputStreams/InputStreamsApi';
import MuxingsApi from './muxings/MuxingsApi';
import CaptionsApi from './captions/CaptionsApi';
import SidecarsApi from './sidecars/SidecarsApi';
import KeyframesApi from './keyframes/KeyframesApi';
import BitmovinResponse from '../../models/BitmovinResponse';
import CloudRegion from '../../models/CloudRegion';
import Encoding from '../../models/Encoding';
import ReprioritizeEncodingRequest from '../../models/ReprioritizeEncodingRequest';
import RescheduleEncodingRequest from '../../models/RescheduleEncodingRequest';
import StartEncodingRequest from '../../models/StartEncodingRequest';
import Task from '../../models/Task';
import PaginationResponse from '../../models/PaginationResponse';
import { EncodingListQueryParams, EncodingListQueryParamsBuilder } from './EncodingListQueryParams';

/**
 * EncodingsApi - object-oriented interface
 * @export
 * @class EncodingsApi
 * @extends {BaseAPI}
 */
export default class EncodingsApi extends BaseAPI {
  public live: LiveApi;
  public machineLearning: MachineLearningApi;
  public customdata: CustomdataApi;
  public streams: StreamsApi;
  public inputStreams: InputStreamsApi;
  public muxings: MuxingsApi;
  public captions: CaptionsApi;
  public sidecars: SidecarsApi;
  public keyframes: KeyframesApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.live = new LiveApi(configuration);
    this.machineLearning = new MachineLearningApi(configuration);
    this.customdata = new CustomdataApi(configuration);
    this.streams = new StreamsApi(configuration);
    this.inputStreams = new InputStreamsApi(configuration);
    this.muxings = new MuxingsApi(configuration);
    this.captions = new CaptionsApi(configuration);
    this.sidecars = new SidecarsApi(configuration);
    this.keyframes = new KeyframesApi(configuration);
  }

  /**
   * @summary Create Encoding
   * @param {Encoding} encoding The Encoding to be created
   * @throws {RequiredError}
   * @memberof EncodingsApi
   */
  public create(encoding?: Encoding): Promise<Encoding> {
    return this.restClient.post<Encoding>('/encoding/encodings', {}, encoding).then((response) => {
      return new Encoding(response);
    });
  }

  /**
   * @summary Delete Encoding
   * @param {string} encodingId Id of the encoding.
   * @throws {RequiredError}
   * @memberof EncodingsApi
   */
  public delete(encodingId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Encoding Details
   * @param {string} encodingId Id of the encoding.
   * @throws {RequiredError}
   * @memberof EncodingsApi
   */
  public get(encodingId: string): Promise<Encoding> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.get<Encoding>('/encoding/encodings/{encoding_id}', pathParamMap).then((response) => {
      return new Encoding(response);
    });
  }

  /**
   * @summary Encoding Start Details
   * @param {string} encodingId Id of the encoding
   * @throws {RequiredError}
   * @memberof EncodingsApi
   */
  public getStartRequest(encodingId: string): Promise<StartEncodingRequest> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.get<StartEncodingRequest>('/encoding/encodings/{encoding_id}/start', pathParamMap).then((response) => {
      return new StartEncodingRequest(response);
    });
  }

  /**
   * @summary List all Encodings
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
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
      const paginationResponse = new PaginationResponse<Encoding>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new Encoding(i));
      }
      return paginationResponse;
    });
  }

  /**
   * @summary Reprioritize Encoding
   * @param {string} encodingId Id of the encoding.
   * @param {ReprioritizeEncodingRequest} reprioritizeEncodingRequest Reprioritization options
   * @throws {RequiredError}
   * @memberof EncodingsApi
   */
  public reprioritize(encodingId: string, reprioritizeEncodingRequest?: ReprioritizeEncodingRequest): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<BitmovinResponse>('/encoding/encodings/{encoding_id}/reprioritize', pathParamMap, reprioritizeEncodingRequest).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Reschedule Encoding
   * @param {string} encodingId Id of the encoding.
   * @param {RescheduleEncodingRequest} rescheduleEncodingRequest Rescheduling options
   * @throws {RequiredError}
   * @memberof EncodingsApi
   */
  public reschedule(encodingId: string, rescheduleEncodingRequest?: RescheduleEncodingRequest): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<BitmovinResponse>('/encoding/encodings/{encoding_id}/reschedule', pathParamMap, rescheduleEncodingRequest).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Start Encoding
   * @param {string} encodingId Id of the encoding
   * @param {StartEncodingRequest} [startEncodingRequest] Encoding Startup Options
   * @throws {RequiredError}
   * @memberof EncodingsApi
   */
  public start(encodingId: string, startEncodingRequest?: StartEncodingRequest): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<BitmovinResponse>('/encoding/encodings/{encoding_id}/start', pathParamMap, startEncodingRequest).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Encoding Status
   * @param {string} encodingId Id of the encoding
   * @throws {RequiredError}
   * @memberof EncodingsApi
   */
  public status(encodingId: string): Promise<Task> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.get<Task>('/encoding/encodings/{encoding_id}/status', pathParamMap).then((response) => {
      return new Task(response);
    });
  }

  /**
   * @summary Stop Encoding
   * @param {string} encodingId Id of the encoding
   * @throws {RequiredError}
   * @memberof EncodingsApi
   */
  public stop(encodingId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<BitmovinResponse>('/encoding/encodings/{encoding_id}/stop', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }
}
