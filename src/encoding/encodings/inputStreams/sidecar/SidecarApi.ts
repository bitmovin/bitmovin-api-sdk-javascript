import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import DolbyVisionMetadataIngestApi from './dolbyVisionMetadataIngest/DolbyVisionMetadataIngestApi';

/**
 * SidecarApi - object-oriented interface
 * @export
 * @class SidecarApi
 * @extends {BaseAPI}
 */
export default class SidecarApi extends BaseAPI {
  public dolbyVisionMetadataIngest: DolbyVisionMetadataIngestApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.dolbyVisionMetadataIngest = new DolbyVisionMetadataIngestApi(configuration);
  }
}
