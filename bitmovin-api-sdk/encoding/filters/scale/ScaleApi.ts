import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../models/BitmovinResponse';
import ScaleFilter from '../../../models/ScaleFilter';
import PaginationResponse from '../../../models/PaginationResponse';
import ScaleFilterListQueryParams from './ScaleFilterListQueryParams';

/**
 * ScaleApi - object-oriented interface
 * @export
 * @class ScaleApi
 * @extends {BaseAPI}
 */
export default class ScaleApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create Scale Filter
   * @param {ScaleFilter} [scaleFilter]
   * @throws {RequiredError}
   * @memberof ScaleApi
   */
  public create(scaleFilter?: ScaleFilter): Promise<ScaleFilter> {
    return this.restClient.post<ScaleFilter>('/encoding/filters/scale', {}, scaleFilter).then((response) => {
      return new ScaleFilter(response);
    });
  }

  /**
   * @summary Delete Scale Filter
   * @param {string} filterId Id of the scale filter
   * @throws {RequiredError}
   * @memberof ScaleApi
   */
  public delete(filterId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      filter_id: filterId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/filters/scale/{filter_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Scale Filter Details
   * @param {string} filterId Id of the scale filter
   * @throws {RequiredError}
   * @memberof ScaleApi
   */
  public get(filterId: string): Promise<ScaleFilter> {
    const pathParamMap = {
      filter_id: filterId
    };
    return this.restClient.get<ScaleFilter>('/encoding/filters/scale/{filter_id}', pathParamMap).then((response) => {
      return new ScaleFilter(response);
    });
  }

  /**
   * @summary List Scale Filters
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof ScaleApi
   */
  public list(queryParams?: ScaleFilterListQueryParams): Promise<PaginationResponse<ScaleFilter>> {
    return this.restClient.get<PaginationResponse<ScaleFilter>>('/encoding/filters/scale', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<ScaleFilter>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new ScaleFilter(i));
      }
      return paginationResponse;
    });
  }
}
