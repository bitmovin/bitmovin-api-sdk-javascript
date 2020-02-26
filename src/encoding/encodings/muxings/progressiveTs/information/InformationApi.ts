import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import ProgressiveTsMuxingInformation from '../../../../../models/ProgressiveTsMuxingInformation';

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
   * @summary Progressive TS muxing Information
   * @param {string} encodingId ID of the Encoding.
   * @param {string} muxingId ID of the Progressive TS muxing
   * @throws {BitmovinError}
   * @memberof InformationApi
   */
  public get(encodingId: string, muxingId: string): Promise<ProgressiveTsMuxingInformation> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.get<ProgressiveTsMuxingInformation>('/encoding/encodings/{encoding_id}/muxings/progressive-ts/{muxing_id}/information', pathParamMap).then((response) => {
      return map(response, ProgressiveTsMuxingInformation);
    });
  }
}
