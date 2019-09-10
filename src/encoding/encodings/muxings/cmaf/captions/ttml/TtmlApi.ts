import {BaseAPI} from '../../../../../../common/BaseAPI';
import Configuration from '../../../../../../common/Configuration';
import {map, mapArray} from '../../../../../../common/Mapper';
import TtmlEmbed from '../../../../../../models/TtmlEmbed';

/**
 * TtmlApi - object-oriented interface
 * @export
 * @class TtmlApi
 * @extends {BaseAPI}
 */
export default class TtmlApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Delete TTML Embed Captions
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the CMAF muxing
   * @param {string} captionsId Id of the captions configuration.
   * @throws {BitmovinError}
   * @memberof TtmlApi
   */
  public delete(encodingId: string, muxingId: string, captionsId: string): Promise<TtmlEmbed> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId,
      captions_id: captionsId
    };
    return this.restClient.delete<TtmlEmbed>('/encoding/encodings/{encoding_id}/muxings/cmaf/{muxing_id}/captions/ttml/{captions_id}', pathParamMap).then((response) => {
      return map(response, TtmlEmbed);
    });
  }

  /**
   * @summary TTML Embed Captions Details
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the CMAF muxing
   * @param {string} captionsId Id of the captions.
   * @throws {BitmovinError}
   * @memberof TtmlApi
   */
  public get(encodingId: string, muxingId: string, captionsId: string): Promise<TtmlEmbed> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId,
      captions_id: captionsId
    };
    return this.restClient.get<TtmlEmbed>('/encoding/encodings/{encoding_id}/muxings/cmaf/{muxing_id}/captions/ttml/{captions_id}', pathParamMap).then((response) => {
      return map(response, TtmlEmbed);
    });
  }
}
