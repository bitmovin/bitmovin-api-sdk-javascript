import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import EsamMediaPoint from '../../../../../models/EsamMediaPoint';

/**
 * MediaPointsApi - object-oriented interface
 * @export
 * @class MediaPointsApi
 * @extends {BaseAPI}
 */
export default class MediaPointsApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Create ESAM media point for live stream
   * @param {string} encodingId Id of the encoding
   * @param {EsamMediaPoint} esamMediaPoint ESAM media point
   * @throws {BitmovinError}
   * @memberof MediaPointsApi
   */
  public create(encodingId: string, esamMediaPoint?: EsamMediaPoint): Promise<EsamMediaPoint> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<EsamMediaPoint>('/encoding/encodings/{encoding_id}/live/esam/media-points', pathParamMap, esamMediaPoint).then((response) => {
      return map(response, EsamMediaPoint);
    });
  }
}
