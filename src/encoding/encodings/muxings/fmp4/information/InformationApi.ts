import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import Fmp4MuxingInformation from '../../../../../models/Fmp4MuxingInformation';

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
   * @summary Fmp4 muxing Information
   * @param {string} encodingId ID of the Encoding.
   * @param {string} muxingId ID of the Fmp4 muxing
   * @throws {BitmovinError}
   * @memberof InformationApi
   */
  public get(encodingId: string, muxingId: string): Promise<Fmp4MuxingInformation> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.get<Fmp4MuxingInformation>('/encoding/encodings/{encoding_id}/muxings/fmp4/{muxing_id}/information', pathParamMap).then((response) => {
      return map(response, Fmp4MuxingInformation);
    });
  }
}
