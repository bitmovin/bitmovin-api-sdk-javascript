import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import {map, mapArray} from '../../common/Mapper';
import EncodingsApi from './encodings/EncodingsApi';
import DnsMappingsApi from './dnsMappings/DnsMappingsApi';
import StreamKeysApi from './streamKeys/StreamKeysApi';
import StandbyPoolsApi from './standbyPools/StandbyPoolsApi';

/**
 * LiveApi - object-oriented interface
 * @export
 * @class LiveApi
 * @extends {BaseAPI}
 */
export default class LiveApi extends BaseAPI {
  public encodings: EncodingsApi;
  public dnsMappings: DnsMappingsApi;
  public streamKeys: StreamKeysApi;
  public standbyPools: StandbyPoolsApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.encodings = new EncodingsApi(configuration);
    this.dnsMappings = new DnsMappingsApi(configuration);
    this.streamKeys = new StreamKeysApi(configuration);
    this.standbyPools = new StandbyPoolsApi(configuration);
  }
}
