import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import InsertableContentApi from './insertableContent/InsertableContentApi';
import ScheduledContentInsertionApi from './scheduledContentInsertion/ScheduledContentInsertionApi';
import StopInsertedContentApi from './stopInsertedContent/StopInsertedContentApi';
import BitmovinResponse from '../../../models/BitmovinResponse';
import LiveEncoding from '../../../models/LiveEncoding';
import StartLiveEncodingRequest from '../../../models/StartLiveEncodingRequest';

/**
 * LiveApi - object-oriented interface
 * @export
 * @class LiveApi
 * @extends {BaseAPI}
 */
export default class LiveApi extends BaseAPI {
  public insertableContent: InsertableContentApi;
  public scheduledContentInsertion: ScheduledContentInsertionApi;
  public stopInsertedContent: StopInsertedContentApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.insertableContent = new InsertableContentApi(configuration);
    this.scheduledContentInsertion = new ScheduledContentInsertionApi(configuration);
    this.stopInsertedContent = new StopInsertedContentApi(configuration);
  }

  /**
   * @summary Live Encoding Details
   * @param {string} encodingId Id of the encoding.
   * @throws {RequiredError}
   * @memberof LiveApi
   */
  public get(encodingId: string): Promise<LiveEncoding> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.get<LiveEncoding>('/encoding/encodings/{encoding_id}/live', pathParamMap).then((response) => {
      return new LiveEncoding(response);
    });
  }

  /**
   * @summary Live Encoding Start Details
   * @param {string} encodingId Id of the encoding
   * @throws {RequiredError}
   * @memberof LiveApi
   */
  public getStartRequest(encodingId: string): Promise<StartLiveEncodingRequest> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.get<StartLiveEncodingRequest>('/encoding/encodings/{encoding_id}/live/start', pathParamMap).then((response) => {
      return new StartLiveEncodingRequest(response);
    });
  }

  /**
   * @summary Re-Start Live Encoding
   * @param {string} encodingId Id of the encoding
   * @throws {RequiredError}
   * @memberof LiveApi
   */
  public restart(encodingId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<BitmovinResponse>('/encoding/encodings/{encoding_id}/live/restart', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Start Live Encoding
   * @param {string} encodingId Id of the encoding
   * @param {StartLiveEncodingRequest} startLiveEncodingRequest Live Encoding startup options
   * @throws {RequiredError}
   * @memberof LiveApi
   */
  public start(encodingId: string, startLiveEncodingRequest?: StartLiveEncodingRequest): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<BitmovinResponse>('/encoding/encodings/{encoding_id}/live/start', pathParamMap, startLiveEncodingRequest).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Stop Live Encoding
   * @param {string} encodingId Id of the encoding
   * @throws {RequiredError}
   * @memberof LiveApi
   */
  public stop(encodingId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<BitmovinResponse>('/encoding/encodings/{encoding_id}/live/stop', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }
}
