import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import EncodingOutputPaths from '../../../models/EncodingOutputPaths';

/**
 * OutputPathsApi - object-oriented interface
 * @export
 * @class OutputPathsApi
 * @extends {BaseAPI}
 */
export default class OutputPathsApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Encoding Output Paths Retrieval
   * @param {string} encodingId Id of the encoding
   * @throws {BitmovinError}
   * @memberof OutputPathsApi
   */
  public get(encodingId: string): Promise<EncodingOutputPaths[]> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.get<EncodingOutputPaths[]>('/encoding/encodings/{encoding_id}/output-paths', pathParamMap).then((response) => {
      return mapArray(response, EncodingOutputPaths);
    });
  }
}
