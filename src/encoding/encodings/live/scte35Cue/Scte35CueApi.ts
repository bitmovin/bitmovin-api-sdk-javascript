import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import Scte35Cue from '../../../../models/Scte35Cue';

/**
 * Scte35CueApi - object-oriented interface
 * @export
 * @class Scte35CueApi
 * @extends {BaseAPI}
 */
export default class Scte35CueApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Insert cue duration
   * @param {string} encodingId Id of the encoding.
   * @param {Scte35Cue} scte35Cue Cue duration and manifest ids.
   * @throws {BitmovinError}
   * @memberof Scte35CueApi
   */
  public create(encodingId: string, scte35Cue?: Scte35Cue): Promise<Scte35Cue> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<Scte35Cue>('/encoding/encodings/{encoding_id}/live/scte-35-cue', pathParamMap, scte35Cue).then((response) => {
      return map(response, Scte35Cue);
    });
  }
}
