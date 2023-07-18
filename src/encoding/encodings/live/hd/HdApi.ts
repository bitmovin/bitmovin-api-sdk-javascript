import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import StartLiveChannelEncodingRequest from '../../../../models/StartLiveChannelEncodingRequest';

/**
 * HdApi - object-oriented interface
 * @export
 * @class HdApi
 * @extends {BaseAPI}
 */
export default class HdApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Live Encoding Start Details
   * @param {string} encodingId Id of the encoding
   * @throws {BitmovinError}
   * @memberof HdApi
   */
  public getStartRequest(encodingId: string): Promise<StartLiveChannelEncodingRequest> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.get<StartLiveChannelEncodingRequest>('/encoding/encodings/{encoding_id}/live/hd/start', pathParamMap).then((response) => {
      return map(response, StartLiveChannelEncodingRequest);
    });
  }
}
