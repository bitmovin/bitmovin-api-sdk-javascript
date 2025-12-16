import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import BitmovinResponse from '../../../models/BitmovinResponse';
import KantarWatermark from '../../../models/KantarWatermark';

/**
 * KantarWatermarkApi - object-oriented interface
 * @export
 * @class KantarWatermarkApi
 * @extends {BaseAPI}
 */
export default class KantarWatermarkApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Create or replace the Kantar Watermark for an encoding
   * @param {string} encodingId Id of the encoding.
   * @param {KantarWatermark} kantarWatermark The Kantar Watermark to be created
   * @throws {BitmovinError}
   * @memberof KantarWatermarkApi
   */
  public create(encodingId: string, kantarWatermark?: KantarWatermark): Promise<KantarWatermark> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<KantarWatermark>('/encoding/encodings/{encoding_id}/kantar-watermark', pathParamMap, kantarWatermark).then((response) => {
      return map(response, KantarWatermark);
    });
  }

  /**
   * @summary Delete the Kantar Watermark for an encoding
   * @param {string} encodingId Id of the encoding.
   * @throws {BitmovinError}
   * @memberof KantarWatermarkApi
   */
  public delete(encodingId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/kantar-watermark', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Get the Kantar Watermark for an encoding
   * @param {string} encodingId Id of the encoding.
   * @throws {BitmovinError}
   * @memberof KantarWatermarkApi
   */
  public get(encodingId: string): Promise<KantarWatermark> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.get<KantarWatermark>('/encoding/encodings/{encoding_id}/kantar-watermark', pathParamMap).then((response) => {
      return map(response, KantarWatermark);
    });
  }
}
