import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import {map, mapArray} from '../../common/Mapper';
import StreamKeysApi from './streamKeys/StreamKeysApi';

/**
 * LiveApi - object-oriented interface
 * @export
 * @class LiveApi
 * @extends {BaseAPI}
 */
export default class LiveApi extends BaseAPI {
  public streamKeys: StreamKeysApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.streamKeys = new StreamKeysApi(configuration);
  }
}
