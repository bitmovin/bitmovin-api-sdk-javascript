import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import PackedAudioMuxingInformation from '../../../../../models/PackedAudioMuxingInformation';

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
   * @summary Packed Audio muxing Information
   * @param {string} encodingId ID of the Encoding.
   * @param {string} muxingId ID of the Packed Audio muxing
   * @throws {BitmovinError}
   * @memberof InformationApi
   */
  public get(encodingId: string, muxingId: string): Promise<PackedAudioMuxingInformation> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.get<PackedAudioMuxingInformation>('/encoding/encodings/{encoding_id}/muxings/packed-audio/{muxing_id}/information', pathParamMap).then((response) => {
      return map(response, PackedAudioMuxingInformation);
    });
  }
}
