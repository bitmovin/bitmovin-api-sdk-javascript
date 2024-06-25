import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import ProgressiveWavMuxingInformation from '../../../../../models/ProgressiveWavMuxingInformation';

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
   * @summary Progressive WAV muxing Information
   * @param {string} encodingId ID of the Encoding.
   * @param {string} muxingId ID of the Progressive WAV muxing
   * @throws {BitmovinError}
   * @memberof InformationApi
   */
  public get(encodingId: string, muxingId: string): Promise<ProgressiveWavMuxingInformation> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.get<ProgressiveWavMuxingInformation>('/encoding/encodings/{encoding_id}/muxings/progressive-wav/{muxing_id}/information', pathParamMap).then((response) => {
      return map(response, ProgressiveWavMuxingInformation);
    });
  }
}
