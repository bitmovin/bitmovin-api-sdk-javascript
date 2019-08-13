import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import InputTypeResponse from '../../../models/InputTypeResponse';
import {getType, map} from '../../../common/Mapper';

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
   * @throws {RequiredError}
   * @memberof TypeApi
   */
  public get(inputId: string): Promise<InputTypeResponse> {
    const pathParamMap = {
      input_id: inputId
    };
    return this.restClient.get<InputTypeResponse>('/encoding/inputs/{input_id}/type', pathParamMap).then((response) => {
      return new InputTypeResponse(response);
    });
  }
}
