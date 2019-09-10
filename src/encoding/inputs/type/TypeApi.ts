import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import InputTypeResponse from '../../../models/InputTypeResponse';

/**
 * TypeApi - object-oriented interface
 * @export
 * @class TypeApi
 * @extends {BaseAPI}
 */
export default class TypeApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Get Input Type
   * @param {string} inputId Id of the input
   * @throws {BitmovinError}
   * @memberof TypeApi
   */
  public get(inputId: string): Promise<InputTypeResponse> {
    const pathParamMap = {
      input_id: inputId
    };
    return this.restClient.get<InputTypeResponse>('/encoding/inputs/{input_id}/type', pathParamMap).then((response) => {
      return map(response, InputTypeResponse);
    });
  }
}
