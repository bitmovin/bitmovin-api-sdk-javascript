import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import Mp3MuxingInformation from '../../../../../models/Mp3MuxingInformation';

/**
 * InformationApi - object-oriented interface
 * @export
 * @class InformationApi
 * @extends {BaseAPI}
 */
export default class InformationApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary MP3 muxing Information
   * @param {string} encodingId ID of the Encoding.
   * @param {string} muxingId ID of the MP3 muxing
   * @throws {BitmovinError}
   * @memberof InformationApi
   */
  public get(encodingId: string, muxingId: string): Promise<Mp3MuxingInformation> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.get<Mp3MuxingInformation>('/encoding/encodings/{encoding_id}/muxings/mp3/{muxing_id}/information', pathParamMap).then((response) => {
      return map(response, Mp3MuxingInformation);
    });
  }
}
