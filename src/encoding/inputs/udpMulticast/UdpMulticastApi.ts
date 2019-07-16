import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import UdpMulticastInput from '../../../models/UdpMulticastInput';
import PaginationResponse from '../../../models/PaginationResponse';
import { UdpMulticastInputListQueryParams, UdpMulticastInputListQueryParamsBuilder } from './UdpMulticastInputListQueryParams';

/**
 * UdpMulticastApi - object-oriented interface
 * @export
 * @class UdpMulticastApi
 * @extends {BaseAPI}
 */
export default class UdpMulticastApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create UDP multicast input
   * @param {UdpMulticastInput} udpMulticastInput The UdpMulticastInput to be created
   * @throws {RequiredError}
   * @memberof UdpMulticastApi
   */
  public create(udpMulticastInput?: UdpMulticastInput): Promise<UdpMulticastInput> {
    return this.restClient.post<UdpMulticastInput>('/encoding/inputs/udp-multicast', {}, udpMulticastInput).then((response) => {
      return new UdpMulticastInput(response);
    });
  }

  /**
   * @summary Delete UDP multicast input
   * @param {string} inputId Id of the input
   * @throws {RequiredError}
   * @memberof UdpMulticastApi
   */
  public delete(inputId: string): Promise<UdpMulticastInput> {
    const pathParamMap = {
      input_id: inputId
    };
    return this.restClient.delete<UdpMulticastInput>('/encoding/inputs/udp-multicast/{input_id}', pathParamMap).then((response) => {
      return new UdpMulticastInput(response);
    });
  }

  /**
   * @summary UDP multicast Input Details
   * @param {string} inputId Id of the input
   * @throws {RequiredError}
   * @memberof UdpMulticastApi
   */
  public get(inputId: string): Promise<UdpMulticastInput> {
    const pathParamMap = {
      input_id: inputId
    };
    return this.restClient.get<UdpMulticastInput>('/encoding/inputs/udp-multicast/{input_id}', pathParamMap).then((response) => {
      return new UdpMulticastInput(response);
    });
  }

  /**
   * @summary List UDP multicast inputs
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof UdpMulticastApi
   */
  public list(queryParameters?: UdpMulticastInputListQueryParams | ((q: UdpMulticastInputListQueryParamsBuilder) => UdpMulticastInputListQueryParamsBuilder)): Promise<PaginationResponse<UdpMulticastInput>> {
    let queryParams: UdpMulticastInputListQueryParams = {};
    if (typeof queryParameters === 'function') {
        queryParams = queryParameters(new UdpMulticastInputListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
        queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<UdpMulticastInput>>('/encoding/inputs/udp-multicast', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<UdpMulticastInput>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new UdpMulticastInput(i));
      }
      return paginationResponse;
    });
  }
}
