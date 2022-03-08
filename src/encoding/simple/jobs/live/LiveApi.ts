import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import SimpleEncodingLiveJobRequest from '../../../../models/SimpleEncodingLiveJobRequest';
import SimpleEncodingLiveJobResponse from '../../../../models/SimpleEncodingLiveJobResponse';

/**
 * LiveApi - object-oriented interface
 * @export
 * @class LiveApi
 * @extends {BaseAPI}
 */
export default class LiveApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Create a Simple Encoding Live Job
   * @param {SimpleEncodingLiveJobRequest} simpleEncodingLiveJobRequest The Simple Encoding Live Job to be created. 
   * @throws {BitmovinError}
   * @memberof LiveApi
   */
  public create(simpleEncodingLiveJobRequest?: SimpleEncodingLiveJobRequest): Promise<SimpleEncodingLiveJobResponse> {
    return this.restClient.post<SimpleEncodingLiveJobResponse>('/encoding/simple/jobs/live', {}, simpleEncodingLiveJobRequest).then((response) => {
      return map(response, SimpleEncodingLiveJobResponse);
    });
  }

  /**
   * @summary Simple Encoding Live Job details
   * @param {string} simpleEncodingJobId Id of the Simple Encoding Live Job
   * @throws {BitmovinError}
   * @memberof LiveApi
   */
  public get(simpleEncodingJobId: string): Promise<SimpleEncodingLiveJobResponse> {
    const pathParamMap = {
      simple_encoding_job_id: simpleEncodingJobId
    };
    return this.restClient.get<SimpleEncodingLiveJobResponse>('/encoding/simple/jobs/live/{simple_encoding_job_id}', pathParamMap).then((response) => {
      return map(response, SimpleEncodingLiveJobResponse);
    });
  }
}
