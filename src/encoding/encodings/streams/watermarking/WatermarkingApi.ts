import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import NexguardFileMarkerApi from './nexguardFileMarker/NexguardFileMarkerApi';

/**
 * WatermarkingApi - object-oriented interface
 * @export
 * @class WatermarkingApi
 * @extends {BaseAPI}
 */
export default class WatermarkingApi extends BaseAPI {
  public nexguardFileMarker: NexguardFileMarkerApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.nexguardFileMarker = new NexguardFileMarkerApi(configuration);
  }
}
