import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import EncodingsApi from './encodings/EncodingsApi';
import ManifestApi from './manifest/ManifestApi';
import {getType, map} from '../../../common/Mapper';

/**
 * EncodingApi - object-oriented interface
 * @export
 * @class EncodingApi
 * @extends {BaseAPI}
 */
export default class EncodingApi extends BaseAPI {
  public encodings: EncodingsApi;
  public manifest: ManifestApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.encodings = new EncodingsApi(configuration);
    this.manifest = new ManifestApi(configuration);
  }
}
